package org.jeecgframework.web.system.filter;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CrossFilter implements Filter {
	private static final boolean debug = true;
	private FilterConfig filterConfig = null;

	public CrossFilter() {
		super();
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;
		if (filterConfig != null) {
			if (debug) {
				log("CrossFilter:Initializing filter");
			}
		}

	}

	@Override
	public String toString() {
		if (filterConfig == null) {
			return ("CrossFilter()");
		}
		StringBuffer sb = new StringBuffer("CrossFilter(");
		sb.append(filterConfig);
		sb.append(")");
		return (sb.toString());
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		if (debug) {
			log("CrossFilter:doFilter()");
		}

		if (response instanceof HttpServletResponse) {
			HttpServletResponse alteredResponse = ((HttpServletResponse) response);
			// I need to find a way to make sure this only gets called on 200-300 http
			// responses
			// TODO: see above comment
			addHeadersFor200Response(alteredResponse);
		}
		doBeforeProcessing(request, response);

		Throwable problem = null;
		try {
			chain.doFilter(request, response);
		} catch (Throwable t) {
			// If an exception is thrown somewhere down the filter chain,
			// we still want to execute our after processing, and then
			// rethrow the problem after that.
			problem = t;
			t.printStackTrace();
		}

		doAfterProcessing(request, response);

		// If there was a problem, we want to rethrow it if it is
		// a known type, otherwise log it.
		if (problem != null) {
			if (problem instanceof ServletException) {
				throw (ServletException) problem;
			}
			if (problem instanceof IOException) {
				throw (IOException) problem;
			}
			sendProcessingError(problem, response);
		}

	}

	@Override
	public void destroy() {

	}

	private void doBeforeProcessing(ServletRequest request, ServletResponse response)
			throws IOException, ServletException {
		if (debug) {
			log("CrossFilter:DoBeforeProcessing");
		}

	}

	private void doAfterProcessing(ServletRequest request, ServletResponse response)
			throws IOException, ServletException {
		if (debug) {
			log("CrossFilter:DoAfterProcessing");
		}
	}

	private void addHeadersFor200Response(HttpServletResponse response) {
		// TODO: externalize the Allow-Origin
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		response.addHeader("Access-Control-Allow-Headers",
				"X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
		response.addHeader("Access-Control-Max-Age", "1728000");
	}

	private void sendProcessingError(Throwable t, ServletResponse response) {
		String stackTrace = getStackTrace(t);

		if (stackTrace != null && !stackTrace.equals("")) {
			try {
				response.setContentType("text/html");
				PrintStream ps = new PrintStream(response.getOutputStream());
				PrintWriter pw = new PrintWriter(ps);
				pw.print("<html>\n<head>\n<title>Error</title>\n</head>\n<body>\n"); // NOI18N

				// PENDING! Localize this for next official release
				pw.print("<h1>The resource did not process correctly</h1>\n<pre>\n");
				pw.print(stackTrace);
				pw.print("</pre></body>\n</html>"); // NOI18N
				pw.close();
				ps.close();
				response.getOutputStream().close();
			} catch (Exception ex) {
			}
		} else {
			try {
				PrintStream ps = new PrintStream(response.getOutputStream());
				t.printStackTrace(ps);
				ps.close();
				response.getOutputStream().close();
			} catch (Exception ex) {
			}
		}
	}

	public static String getStackTrace(Throwable t) {
		String stackTrace = null;
		try {
			StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			t.printStackTrace(pw);
			pw.close();
			sw.close();
			stackTrace = sw.getBuffer().toString();
		} catch (Exception ex) {
		}
		return stackTrace;
	}

	public void log(String msg) {
		filterConfig.getServletContext().log(msg);
	}

}