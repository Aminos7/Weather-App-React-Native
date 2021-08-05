//----- dark mode ----//
const fontColorWhite = '#FFF'
//---- basic mode ----//
const blue = '#000a12'
export default {
    color : blue,
    container :{
        marginBottom :10,
        marginTop: 70,
        flex: 1,
        alignItems: 'center',
        color:"black",
    },
    title : {
        fontSize: 30,
        color: fontColorWhite,
       // fontFamily : 'open-sans-bold'
        
    },
   
    header :{
        backgroundColor : blue,
        tintColor: '#FFF'
    },
    headerTitle:{
        color: 'white',
    },
    Indicator:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    View :{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: "space-between",
        backgroundColor: '#37474f',
        color: 'blue'
    },
    day:{
        color: '#FFF',
        fontSize: 15,
    },
    dayFirst:{
        color: 'white',
        fontSize: 15,
    },
    temp:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    tempFirst:{
        marginTop: -20,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold'
    },
    toDay:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    TextBar:{
        color: blue,
        flex: 1,
        alignItems: 'center'

    },
    CardFirst:{
        backgroundColor: '#102027',
        height: 300,
        
    },
    ViewFirst :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
     
    },
    ViewFirst2:{
        flex :1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
       
    },
    Card:{
        backgroundColor: '#37474f',
        margin: 0,
    },
    CardView:{
        margin: 0
    },
    /*---------Modal---------*/
    ModalStyle1:{
        flexDirection: 'row', 
        justifyContent:'center',
        alignItems:'center'
    },
    ModalStyle: {
        justifyContent: 'space-around',
        margin: 30,
        backgroundColor: 'rgba(0,0,0,.75)',
        borderRadius: 0
    },
    CardModal:{
        flex :1,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems: 'center',
        

    },
    TitleModal:{
        marginTop: 25,
        color:'#FFF',
        fontSize:30,
    //    fontWeight :'bold',
    },
    ModalReturn: {
     //   fontWeight :'bold',
        fontSize: 20,
       
    }
}