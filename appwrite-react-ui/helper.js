let url = 'http://localhost:5173/?userId=check&secret=3a47478be015160409ca39778ef22cfe96553798fd3c74befaf18edb362adf0db72e193470543d3fb51aa40b1a832a0589097cc0a99b4fdf3a9b26d2414d248f5859dd96fdfffc7a0e286b645279fe322dd10fd72999d8a50da6f3c50541b36695a465777c256a046d18829cf51119e57adc773537026a013283ab35678cdc97&expire=2023-04-10+12%3A28%3A46.516'
console.log(url.split('?')[1].split('&')[0].split('=')[1])
// console.log(url.split('?')[1].split('&')[1].split('=')[1])