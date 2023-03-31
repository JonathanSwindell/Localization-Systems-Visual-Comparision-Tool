import { useEffect, useState } from 'react';
import * as d3 from 'd3';

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

  function downloadCSV() {
    // Convert the data to CSV format
    const csv = d3.csvFormat(path);
    // Create a Blob object for the CSV data
    const csvBlob = new Blob([csv], { type: 'text/csv' });
    // Create a URL for the Blob object
    const csvUrl = URL.createObjectURL(csvBlob);
    // Create a link element for the CSV file download
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'coordinates.csv';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return { path, downloadCSV };
}

export default useWebSocket;