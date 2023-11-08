import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';

const Task7 = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('fr'); // Default target language is French

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const encodedParams = new URLSearchParams();
    encodedParams.set('q', text);
    encodedParams.set('target', targetLanguage);

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'f41c3ad761msh0c4c94dbc7b0890p15e042jsn6d21eb7c4878',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error:', error);
      setTranslatedText('Error occurred');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" align="center">
        Text Translation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Text to Translate"
          fullWidth
          margin="normal"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
        />
        <TextField
          label="Target Language"
          fullWidth
          margin="normal"
          variant="outlined"
          value={targetLanguage}
          onChange={handleLanguageChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Translate
        </Button>
      </form>
      {translatedText && (
        <div>
          <Typography variant="h6" component="h3">
           Your Translated Text:
          </Typography>
          <Typography variant="body1">{translatedText}</Typography>
        </div>
      )}
    </Container>
  );
};

export default Task7;
