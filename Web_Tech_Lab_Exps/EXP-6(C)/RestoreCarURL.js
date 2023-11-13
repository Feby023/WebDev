import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class RestoreCarURL extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Restore Car URL Rewriting</title></head>");
        out.println("<body class='flex-col'><h1>Restore Car URL Rewriting</h1>");
        out.println("<h2>Car Part: " + request.getParameter("carPart") + "</h2>");
        out.println("<h2>Modification: " + request.getParameter("modification") + "</h2>");
        out.println("</body></html>");
    }
}
