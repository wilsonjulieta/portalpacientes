import { GET } from "./FETCH.JS";

const url = "https://www.pdf995.com/samples/pdf.pdf"

export async function openPdfFromApi(consultorioId, token, idArchivo) {
    try {
      // Fetch the PDF from the API

      const response = await GET(consultorioId, token, "archivos/" + idArchivo);

      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
  
      // Convert the response to a Blob
      const originalBlob = await response.blob();

      const pdfBlob = new Blob([originalBlob], { type: 'application/pdf' });  
      // Create a Blob URL for the PDF
      const pdfUrl = URL.createObjectURL(pdfBlob);
  
      // Open the Blob URL in a new tab
      window.open(pdfUrl, '_blank');
  
      // Optional: Revoke the Blob URL after some time to free up memory
      setTimeout(() => {
        URL.revokeObjectURL(pdfUrl);
      }, 10000); // Adjust timeout as needed
    } catch (error) {
      console.error('Error fetching or opening PDF:', error);
    }
  }
  