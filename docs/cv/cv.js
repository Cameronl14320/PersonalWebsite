document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('loading').style.opacity = '0';
        document.getElementById('loading').style.visibility = 'hidden';
    }
  };
  