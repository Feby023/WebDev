import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarURL extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Car URL Rewriting</title></head>");
        out.println("<body class='flex-col'><h1>Car URL Rewriting</h1>");
        out.println("<a href='restorecarurl?carPart=" + request.getParameter("carPart") + "&modification=" + request.getParameter("modification") + "'>Click here to see the URL</a>");
        out.println("</body></html>");
    }
}
