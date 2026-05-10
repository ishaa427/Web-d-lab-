import javax.swing.*;
import java.awt.*;

public class SEOAccessibilityDemo {

    public static void main(String[] args) {

        JFrame frame = new JFrame("SEO & Accessibility Demo");
        frame.setSize(650, 450);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        // Heading
        JLabel heading = new JLabel(
                "SEO and Accessibility Optimization",
                JLabel.CENTER
        );

        heading.setFont(new Font("Arial", Font.BOLD, 24));
        heading.setForeground(Color.BLUE);

        // Text Area
        JTextArea textArea = new JTextArea();

        textArea.setText(
                "SEO Techniques Used:\n\n" +

                "1. Semantic HTML Tags\n" +
                "   <header>, <nav>, <main>, <section>, <footer>\n\n" +

                "2. Proper Heading Structure\n" +
                "   <h1>, <h2>, <h3>\n\n" +

                "3. Meta Tags\n" +
                "   description, keywords, author\n\n" +

                "4. Alt Attributes\n" +
                "   Used for images accessibility\n\n" +

                "5. ARIA Attributes\n" +
                "   Improves screen reader support\n\n" +

                "Conclusion:\n" +
                "SEO and accessibility improve website visibility\n" +
                "and usability for all users."
        );

        textArea.setFont(new Font("Arial", Font.PLAIN, 16));
        textArea.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(textArea);

        // Button
        JButton button = new JButton("Show SEO Message");

        button.addActionListener(e ->
                JOptionPane.showMessageDialog(
                        frame,
                        "SEO Optimized Webpage Successfully Demonstrated!"
                )
        );

        // Add components
        panel.add(heading, BorderLayout.NORTH);
        panel.add(scrollPane, BorderLayout.CENTER);
        panel.add(button, BorderLayout.SOUTH);

        frame.add(panel);
        frame.setVisible(true);
    }
}
