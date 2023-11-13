import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AccessQuiz extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("username");

        if (username == null) {
            response.sendRedirect("car-modification.html");
        } else {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            out.println("<html><head>");
            out.println("<link rel='stylesheet' href='style.css' /> <title>Access Quiz</title></head>");
            out.println("<body class='flex-col'><h2>Welcome to the Car Modification Quiz!</h2>");
            out.println("<form class='flex-col' action='evaluationquiz' method='post'>");
            out.println("Question 1: What does NOS stand for in car modification?");
            out.println("<input type='text' name='answer1'>");
            out.println("Question 2: What is the purpose of a spoiler on a car?");
            out.println("<input type='text' name='answer2'>");
            out.println("Question 3: What does ECU stand for in the context of car tuning?");
            out.println("<input type='text' name='answer3'>");
            out.println("Question 4: What is the role of a turbocharger in car performance?");
            out.println("<input type='text' name='answer4'>");
            out.println("Question 5: What is camber in car suspension?");
            out.println("<input type='text' name='answer5'>");
            out.println("<input type='submit' value='Evaluate'>");
            out.println("</form>");
            out.println("</body></html>");
        }
    }
}
