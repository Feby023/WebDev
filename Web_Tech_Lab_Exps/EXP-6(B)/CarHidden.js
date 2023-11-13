import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarHidden extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Car Hidden Form Fields</title></head>");
        out.println("<body class='flex-col'><h1>Car Hidden Form Fields</h1>");
        out.println("<form action='restorecarhidden' method='post'>");
        out.println("<input type='hidden' name='carPart' value='" + request.getParameter("carPart") + "' />");
        out.println("<input type='hidden' name='modification' value='" + request.getParameter("modification") + "' />");
        out.println("<input type='submit' value='Restore' />");
        out.println("</form></body></html>");
    }
}
