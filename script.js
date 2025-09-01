const SUPABASE_URL = "https://vcdntubrkdrgixymkeod.supabase.co";   // replace
     // replace
    // script.js
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZG50dWJya2RyZ2l4eW1rZW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MzIwMTQsImV4cCI6MjA3MjAwODAxNH0.qdrhEN0Jeb0r9JaBgGX-pXNr86L-ynKK_5qpX_sEMRQ"; 

// Initialize AFTER loading supabase library
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("load").addEventListener("click", async () => {
  const { data, error } = await supabase
    .from("test_table")   // <-- make sure this table exists in your DB
    .select("*");

  if (error) {
    document.getElementById("output").textContent = "Error: " + error.message;
  } else {
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  }
});
//test commit
