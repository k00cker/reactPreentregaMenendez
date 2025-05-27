import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Mensaje"
          name="message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
      {submitted && (
        <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
          ¡Gracias por tu mensaje! Te contactaremos pronto.
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
