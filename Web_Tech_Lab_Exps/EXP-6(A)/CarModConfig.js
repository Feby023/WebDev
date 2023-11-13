import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarModConfig extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie cookie = new Cookie(request.getParameter("carPart"), request.getParameter("modification"));
        cookie.setMaxAge(60*60*24);
        response.addCookie(cookie);
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Car Mod Configuration</title></head>");
        out.println("<body class='flex-col'><h1>Car Mod Configuration</h1>");
        out.println("<a href='restorecarmodconfig'>Click here to see the modifications</a>");
        out.println("</body></html>");
    }
}
