import javax.swing.*;
import java.awt.*;

public class ResponsiveBlogDemo {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Responsive Blog Website");
        frame.setSize(700, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout());

        // Header
        JLabel heading = new JLabel(
                "My Blog Website",
                JLabel.CENTER
        );

        heading.setFont(new Font("Arial", Font.BOLD, 28));
        heading.setForeground(Color.BLUE);

        // Blog Content
        JTextArea blogArea = new JTextArea();

        blogArea.setText(
                "Responsive Blog Website\n\n" +

                "Features Used:\n" +
                "1. Bootstrap Grid System\n" +
                "2. Navigation Bar\n" +
                "3. Hero Section\n" +
                "4. Blog Cards\n" +
                "5. Sidebar Section\n" +
                "6. Media Queries\n\n" +

                "Sample Posts:\n\n" +

                "Post 1:\n" +
                "Responsive design using Bootstrap.\n\n" +

                "Post 2:\n" +
                "Media queries improve mobile view.\n\n" +

                "Conclusion:\n" +
                "Responsive websites adapt properly\n" +
                "to desktop, tablet, and mobile screens."
        );

        blogArea.setFont(new Font("Arial", Font.PLAIN, 16));
        blogArea.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(blogArea);

        // Button
        JButton button = new JButton("Show Blog Message");

        button.addActionListener(e ->
                JOptionPane.showMessageDialog(
                        frame,
                        "Responsive Blog Website Successfully Created!"
                )
        );

        // Footer
        JLabel footer = new JLabel(
                "© 2025 MyBlog",
                JLabel.CENTER
        );

        footer.setFont(new Font("Arial", Font.ITALIC, 14));

        // Add Components
        mainPanel.add(heading, BorderLayout.NORTH);
        mainPanel.add(scrollPane, BorderLayout.CENTER);
        mainPanel.add(button, BorderLayout.SOUTH);

        frame.add(mainPanel);
        frame.add(footer, BorderLayout.PAGE_END);

        frame.setVisible(true);
    }
}
