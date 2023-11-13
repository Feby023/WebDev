import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RestoreCarModConfig extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie[] cookies = request.getCookies();
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Restore Car Mod Configuration</title></head>");
        out.println("<body class='flex-col'><h1>Restore Car Mod Configuration</h1>");
        for(Cookie cookie : cookies) {
            out.println("<h2>" + cookie.getName() + ": " + cookie.getValue() + "</h2>");
        }
        out.println("</body></html>");
    }
}
