import { useEffect, useState } from 'react';

export function useWebSocket() {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', function(event) {
      console.log('Connected to server');
    });

    socket.addEventListener('message', function(event) {
      const coordinates = JSON.parse(event.data);
      console.log('Received coordinates', coordinates);

      // Update the path state with the new coordinates
      setPath(prevPath => [...prevPath, coordinates]);
    });

    socket.addEventListener('close', function(event) {
      console.log('Disconnected from server');
    });

    return () => {
      socket.close();
    };
  }, []);

  return path;
}

export default useWebSocket;
