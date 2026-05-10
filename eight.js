import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class NotesAppCRUD {

    private DefaultListModel<String> notesModel;
    private JList<String> notesList;
    private JTextField noteField;

    public NotesAppCRUD() {

        JFrame frame = new JFrame("Notes App");
        frame.setSize(550, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        // Heading
        JLabel heading = new JLabel(
                "Notes Application",
                JLabel.CENTER
        );

        heading.setFont(new Font("Arial", Font.BOLD, 24));

        frame.add(heading, BorderLayout.NORTH);

        // Center Panel
        JPanel centerPanel = new JPanel();
        centerPanel.setLayout(new BorderLayout());

        // Notes List
        notesModel = new DefaultListModel<>();
        notesList = new JList<>(notesModel);

        JScrollPane scrollPane =
                new JScrollPane(notesList);

        centerPanel.add(scrollPane, BorderLayout.CENTER);

        frame.add(centerPanel, BorderLayout.CENTER);

        // Bottom Panel
        JPanel bottomPanel = new JPanel();

        noteField = new JTextField(20);

        JButton addButton = new JButton("Add");
        JButton updateButton = new JButton("Update");
        JButton deleteButton = new JButton("Delete");

        bottomPanel.add(noteField);
        bottomPanel.add(addButton);
        bottomPanel.add(updateButton);
        bottomPanel.add(deleteButton);

        frame.add(bottomPanel, BorderLayout.SOUTH);

        // Add Note
        addButton.addActionListener(e -> {

            String note = noteField.getText();

            if(!note.isEmpty()) {

                notesModel.addElement(note);
                noteField.setText("");
            }
        });

        // Update Note
        updateButton.addActionListener(e -> {

            int index = notesList.getSelectedIndex();

            if(index != -1) {

                notesModel.set(index,
                        noteField.getText());

                noteField.setText("");
            }
        });

        // Delete Note
        deleteButton.addActionListener(e -> {

            int index = notesList.getSelectedIndex();

            if(index != -1) {

                notesModel.remove(index);
            }
        });

        // Select Note
        notesList.addMouseListener(new MouseAdapter() {

            public void mouseClicked(MouseEvent e) {

                int index = notesList.getSelectedIndex();

                if(index != -1) {

                    noteField.setText(
                            notesModel.get(index)
                    );
                }
            }
        });

        frame.setVisible(true);
    }

    public static void main(String[] args) {

        new NotesAppCRUD();
    }
}
