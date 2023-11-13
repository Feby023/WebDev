import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarModForm extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><head>");
        out.println("<link rel='stylesheet' href='style.css' /> <title>Car Mod Form</title></head>");
        out.println("<body class='flex-col'><h1>Car Mod Form</h1>");
        out.println("<h2>Car Model: " + request.getParameter("carModel") + "</h2>");
        out.println("</body></html>");
    }
}
