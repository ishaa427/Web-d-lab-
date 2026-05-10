import javax.swing.*;
import java.awt.*;

public class HtmlTagsDemo {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Basic HTML Tags Demo");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        JLabel heading = new JLabel("HTML Tags Demonstration", JLabel.CENTER);
        heading.setFont(new Font("Arial", Font.BOLD, 22));

        JTextArea textArea = new JTextArea();

        textArea.setText(
                "1. Heading Tag <h1>\n" +
                "2. Paragraph Tag <p>\n" +
                "3. Line Break Tag <br>\n" +
                "4. Anchor Tag <a>\n" +
                "5. Image Tag <img>\n" +
                "6. List Tags <ul>, <ol>\n" +
                "7. Table Tag <table>\n" +
                "8. Form Tag <form>\n" +
                "9. Bold & Italic Tags <b>, <i>\n" +
                "10. Div Tag <div>\n\n" +
                "HTML is used for designing webpages."
        );

        textArea.setFont(new Font("Arial", Font.PLAIN, 16));
        textArea.setEditable(false);

        JButton button = new JButton("Show Message");

        button.addActionListener(e ->
                JOptionPane.showMessageDialog(frame,
                        "HTML Tags are successfully demonstrated!")
        );

        panel.add(heading, BorderLayout.NORTH);
        panel.add(textArea, BorderLayout.CENTER);
        panel.add(button, BorderLayout.SOUTH);

        frame.add(panel);
        frame.setVisible(true);
    }
}
