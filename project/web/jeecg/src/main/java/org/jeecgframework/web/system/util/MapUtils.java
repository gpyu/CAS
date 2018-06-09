package org.jeecgframework.web.system.util;

public class MapUtils {
	private static double EARTH_RADIUS = 6378.137;  
	  
    private static double rad(double d) {  
        return d * Math.PI / 180.0;  
    }  
  
    /** 
     * 通过经纬度获取距离(单位：米) 
     * @param longitude1  经度1 
     * @param latitude1   纬度1 
     * @param longitude2 经度2 
     * @param latitude2 纬度2 
     * @return 
     */  
    public static double getDistance(double longitude1, double latitude1, double longitude2, double latitude2) {  
        double radLat1 = rad(latitude1);  
        double radLat2 = rad(latitude2);  
        double a = radLat1 - radLat2;  
        double b = rad(longitude1) - rad(longitude2);  
        double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)  
                + Math.cos(radLat1) * Math.cos(radLat2)  
                * Math.pow(Math.sin(b / 2), 2)));  
        s = s * EARTH_RADIUS;  
        s = Math.round(s * 10000d) / 10000d;  
        s = s*1000;  
        return s;  
    }  
      
      
      
    public static void main(String[] args) {  
        System.out.println(MapUtils.getDistance(26.068225,119.207722,26.068391,119.207872));  
    }  
}
