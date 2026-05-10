import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class NotesApp {

    DefaultListModel<String> model = new DefaultListModel<>();
    JList<String> noteList = new JList<>(model);
    JTextField noteField = new JTextField(20);

    int editIndex = -1;

    public NotesApp() {

        JFrame frame = new JFrame("Notes App");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new FlowLayout());

        JLabel heading = new JLabel("Notes Application");
        heading.setFont(new Font("Arial", Font.BOLD, 24));

        JButton addButton = new JButton("Add / Update");
        JButton editButton = new JButton("Edit");
        JButton deleteButton = new JButton("Delete");

        JScrollPane scrollPane = new JScrollPane(noteList);
        scrollPane.setPreferredSize(new Dimension(400, 180));

        // Add or Update Note
        addButton.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {

                String text = noteField.getText();

                if(text.isEmpty()) {
                    JOptionPane.showMessageDialog(frame,
                            "Enter a note!");
                    return;
                }

                if(editIndex == -1) {

                    model.addElement(text);

                } else {

                    model.set(editIndex, text);
                    editIndex = -1;
                }

                noteField.setText("");
            }
        });

        // Edit Note
        editButton.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {

                editIndex = noteList.getSelectedIndex();

                if(editIndex != -1) {

                    noteField.setText(
                            model.get(editIndex)
                    );
                }
            }
        });

        // Delete Note
        deleteButton.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {

                int index = noteList.getSelectedIndex();

                if(index != -1) {

                    model.remove(index);
                }
            }
        });

        panel.add(heading);
        panel.add(noteField);
        panel.add(addButton);
        panel.add(editButton);
        panel.add(deleteButton);
        panel.add(scrollPane);

        frame.add(panel);
        frame.setVisible(true);
    }

    public static void main(String[] args) {

        new NotesApp();
    }
}
