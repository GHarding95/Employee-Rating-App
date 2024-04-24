// utils/exportData.js

export const exportData = (data) => {
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "updatedData.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  