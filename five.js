import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.net.*;
import java.io.*;

public class WeatherApp {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Weather App");
        frame.setSize(450, 350);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        JLabel label = new JLabel("Enter City:");

        JTextField cityField = new JTextField(15);

        JButton button = new JButton("Check Weather");

        JTextArea result = new JTextArea(12, 30);
        result.setEditable(false);

        JScrollPane scrollPane = new JScrollPane(result);

        panel.add(label);
        panel.add(cityField);
        panel.add(button);
        panel.add(scrollPane);

        button.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {

                String city = cityField.getText();

                if(city.isEmpty()) {
                    result.setText("Please enter a city name!");
                    return;
                }

                try {

                    String urlString =
                            "https://wttr.in/" + city + "?format=3";

                    URL url = new URL(urlString);

                    BufferedReader br = new BufferedReader(
                            new InputStreamReader(url.openStream())
                    );

                    String line;
                    StringBuilder output = new StringBuilder();

                    while((line = br.readLine()) != null) {
                        output.append(line);
                    }

                    br.close();

                    result.setText(
                            "Weather Report\n\n" +
                            output.toString()
                    );

                } catch(Exception ex) {

                    result.setText(
                            "Error fetching weather data!"
                    );
                }
            }
        });

        frame.add(panel);

        frame.setVisible(true);
    }
}
