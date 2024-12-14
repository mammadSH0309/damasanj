onanimationendnmessage = function(e) {
    const data = e.data;
    const formattedData = data.map(item => ({ name: item.word, weight: item.weight }));
    postMessage(formattedData);
  };