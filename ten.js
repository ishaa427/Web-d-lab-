import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DeploymentDemo {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Website Deployment Demo");
        frame.setSize(700, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        // Heading
        JLabel heading = new JLabel(
                "Static & Dynamic Website Deployment",
                JLabel.CENTER
        );

        heading.setFont(new Font("Arial", Font.BOLD, 24));
        heading.setForeground(Color.BLUE);

        // Text Area
        JTextArea textArea = new JTextArea();

        textArea.setText(

                "PART A : Static Website Deployment (Netlify)\n\n" +

                "Technologies Used:\n" +
                "- HTML\n" +
                "- CSS\n" +
                "- JavaScript\n\n" +

                "Deployment Steps:\n" +
                "1. Open Netlify website\n" +
                "2. Login or Sign Up\n" +
                "3. Click Add New Site\n" +
                "4. Drag and Drop website folder\n" +
                "5. Netlify generates live URL\n\n" +

                "PART B : Dynamic Website Deployment\n\n" +

                "Technologies Used:\n" +
                "- Node.js\n" +
                "- Express.js\n" +
                "- Heroku / AWS\n\n" +

                "Features:\n" +
                "- Backend API\n" +
                "- Dynamic Data Fetching\n" +
                "- Express Server\n\n" +

                "Conclusion:\n" +
                "Static and dynamic websites can be deployed\n" +
                "using cloud hosting platforms successfully."
        );

        textArea.setFont(new Font("Arial", Font.PLAIN, 16));
        textArea.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(textArea);

        // Buttons
        JPanel buttonPanel = new JPanel();

        JButton staticButton =
                new JButton("Deploy Static Site");

        JButton dynamicButton =
                new JButton("Deploy Dynamic Site");

        // Static Button Action
        staticButton.addActionListener(e ->

                JOptionPane.showMessageDialog(
                        frame,
                        "Static Website Successfully Deployed on Netlify!"
                )
        );

        // Dynamic Button Action
        dynamicButton.addActionListener(e ->

                JOptionPane.showMessageDialog(
                        frame,
                        "Dynamic Website Successfully Deployed on Heroku/AWS!"
                )
        );

        buttonPanel.add(staticButton);
        buttonPanel.add(dynamicButton);

        // Add Components
        panel.add(heading, BorderLayout.NORTH);
        panel.add(scrollPane, BorderLayout.CENTER);
        panel.add(buttonPanel, BorderLayout.SOUTH);

        frame.add(panel);

        frame.setVisible(true);
    }
}
