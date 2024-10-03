import React, { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Editor from '../components/Editor';

const EditorPage = () => {
  const { roomId } = useParams(); // Get roomId from the URL
  const location = useLocation(); // Used to access location.state
  const reactNavigator = useNavigate(); // Used for navigation
  

  const username = location.state?.username;

  useEffect(() => {
    if (!username) {
      reactNavigator('/');
    }
  }, [username, reactNavigator, roomId]); 

  const handleCodeChange = (newCode) => {
    // Handle code changes here
    console.log('Code updated:', newCode);
  };

  return (
    <div className="editor-page">
      <h1>Welcome, {username}</h1>
      <Editor onCodeChange={handleCodeChange} />
    </div>
  );
};

export default EditorPage;
