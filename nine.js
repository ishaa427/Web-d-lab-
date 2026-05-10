import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.HashMap;

public class AuthApp {

    HashMap<String, String> users = new HashMap<>();

    public AuthApp() {

        JFrame frame = new JFrame("Authentication App");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(8, 1, 10, 10));

        JLabel heading = new JLabel(
                "User Authentication System",
                JLabel.CENTER
        );

        heading.setFont(new Font("Arial", Font.BOLD, 22));

        JTextField emailField = new JTextField();
        JPasswordField passwordField = new JPasswordField();

        JButton registerButton = new JButton("Register");
        JButton loginButton = new JButton("Login");
        JButton profileButton = new JButton("View Profile");
        JButton logoutButton = new JButton("Logout");

        JLabel status = new JLabel(
                "Not Logged In",
                JLabel.CENTER
        );

        final boolean[] logged
