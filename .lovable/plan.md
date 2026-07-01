Auto-export every new diagnostic submission to a Google Drive folder as a CSV file.

Steps:
1. Connect the Google Drive app connector to this project so the backend can write files to your Drive.
2. Create a backend edge function `export-diagnostic-to-drive` that receives a new `diagnostic_leads` row, formats it as a CSV (name, email, company, score, tier, answers, timestamp), and uploads it via the Google Drive API to a target folder.
3. Add a database trigger on `diagnostic_leads` that calls the edge function immediately after each insert.
4. Read the target folder from a configurable source (folder ID) so you can change it later without redeploying.

What I need from you:
- The Google Drive folder URL or folder ID where you want the CSVs to land. You can create an empty folder in Drive and paste the link here.