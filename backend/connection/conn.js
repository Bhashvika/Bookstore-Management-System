const mongoose=require('mongoose');
mongoose.connect(
    'mongodb+srv://bbhashvika2004:bhashvika@cluster0.uffyiz7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>{console.log('connected')})