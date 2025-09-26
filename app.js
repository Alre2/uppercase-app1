document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("convertBtn").addEventListener("click", () => {
    const input = document.getElementById("textInput").value;
    const result = toUppercase(input);

    console.log(result); 
    document.getElementById("result").textContent = result; 
  });
});
