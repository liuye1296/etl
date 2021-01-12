fetch("/api/basicData/datasource/getAllDatasource")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
