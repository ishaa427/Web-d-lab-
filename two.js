import javax.swing.*;
import java.awt.*;

public class PortfolioApp {

    public static void main(String[] args) {

        JFrame frame = new JFrame("My Portfolio");
        frame.setSize(600, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        // Header
        JLabel heading = new JLabel("Isha Gupta Portfolio", JLabel.CENTER);
        heading.setFont(new Font("Arial", Font.BOLD, 24));
        heading.setForeground(Color.BLUE);

        // About Section
        JTextArea about = new JTextArea();
        about.setText(
                "About Me:\n\n" +
                "Motivated B.Tech IT student.\n" +
                "Skills: MERN, OpenCV, C++, Python\n\n" +
                "Projects:\n" +
                "1. SmartFlow\n" +
                "2. PatientID+\n" +
                "3. NutriMom\n\n" +
                "Contact:\n" +
                "Email: ishagupta672@gmail.com"
        );

        about.setFont(new Font("Arial", Font.PLAIN, 16));
        about.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(about);

        // Button
        JButton button = new JButton("View Portfolio");

        button.addActionListener(e ->
                JOptionPane.showMessageDialog(frame,
                        "Welcome to Isha Gupta's Portfolio!")
        );

        panel.add(heading, BorderLayout.NORTH);
        panel.add(scrollPane, BorderLayout.CENTER);
        panel.add(button, BorderLayout.SOUTH);

        frame.add(panel);
        frame.setVisible(true);
    }
}
