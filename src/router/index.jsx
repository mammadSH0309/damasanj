import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import MainPage from "../pages/MainPage"
import OstanNama from "../pages/ostanNama/OstanNama"
import LahzeNegar from "../pages/lahzeNegar/LahzeNegar"
import RasadNegar from "../pages/lahzeNegar/LahzeNegar"
import Profile from "../pages/Profile"
import HoshNegar from "../pages/hoshNegar/HoshNegar"
import NotFound from "../pages/NotFound"
import ParvandePage from "../pages/parvandeVizhe/ParvandePage"
import LoginPage from "../pages/LoginPage"
import GozareshPage from "../pages/parvandeVizhe/GozareshPage"
import SedaSimaPage from "../pages/sedaSima/SedaSimaPage"
import RasadSimaPage from "../pages/RasadSimaPage"
import ChandResaneBaztabPage from '../pages/sedaSima/BaztabTV/ChandResaneBaztabPage'
import MaktobBaztabPage from '../pages/sedaSima/BaztabTV/MaktobBaztabPage'
import MasrafeOperatorBaztabPage from '../pages/sedaSima/BaztabTV/MasrafeOperatorBaztabPage'
import ChehreNamaVezaratNaftPage from "../pages/dastresiVizhe/Vezaratnaft/ChehreNamaVezaratNaftPage"
import OtaghvaziatVezaratNaftPage from "../pages/dastresiVizhe/Vezaratnaft/OtaghvaziatVezaratNaftPage"
import RasadOnlineBaztabPage from '../pages/sedaSima/BaztabTV/RasadOnlineBaztabPage'
import GozareshRasadPage from "../pages/gozaresherasad/GozareshRasadPage"
import RevayateAval from "../pages/gozaresherasad/RevayateAval"
import BoomeMasael from "../pages/gozaresherasad/BoomeMasael"
import BasteRozane from "../pages/gozaresherasad/BasteRozane"
import DamaSanj from "../pages/gozaresherasad/DamaSanj"
import DadeNama from "../pages/gozaresherasad/DadeNama"
import Shayeat from "../pages/gozaresherasad/Shayeat"
import RahbordNegar from "../pages/gozaresherasad/RahbordNegar"
import DastresiVizhePage from "../pages/dastresiVizhe/DastresiVizhePage"
import AsarSanjiPage from "../pages/asarSanji/AsarSanjiPage"
import PoyeshPage from "../pages/asarSanji/PoyeshPage"
import BaztabtvPage from "../pages/sedaSima/BaztabTV/BaztabtvPage"
import OtaghVaziatPage from "../pages/sedaSima/otaghvaziat/OtaghVaziatPage"
import GozareshRasadi from "../pages/sedaSima/gozareshRasadiSedaSima/GozareshRasadi"
import RasadResaneMeliPage from "../pages/sedaSima/gozareshRasadiSedaSima/RasadResaneMeliPage"
import AfkarSanjiGozareshRasadiPage from "../pages/sedaSima/gozareshRasadiSedaSima/AfkarSanjiGozareshRasadiPage"
import TasvirChehrePage from "../pages/sedaSima/tasvirChehre/TasvirChehrePage"
import BarnameOstaniPage from "../pages/sedaSima/BarnameOstani/BarnameOstaniPage"
import MaktobOstaniPage from '../pages/sedaSima/BarnameOstani/MaktobOstaniPage'
import RasadOnlineOstani from '../pages/sedaSima/BarnameOstani/RasadOnlineOstaniPage'
import MasrafOperatorOstani from '../pages/sedaSima/BarnameOstani/MasrafOperatorOstaniPage'
import AccountSazmanPage from "../pages/sedaSima/accountSazman/AccountSazmanPage"
import DaraiiSazmanPage from "../pages/sedaSima/daraiiSazman/DaraiiSazmanPage"
import MoanevatSiasiPage from "../pages/sedaSima/masrafOperator/MoanevatSiasiPage"
import MoavenatOstanPage from "../pages/sedaSima/masrafOperator/MoavenatOstanPage"
import MoavenatSimaPage from "../pages/sedaSima/masrafOperator/MoavenatSimaPage"
import MoavenatSedaPage from "../pages/sedaSima/masrafOperator/MoavenatSedaPage"
import MasrafOperatorPage from "../pages/sedaSima/masrafOperator/MasrafOperatorPage"
import ChandResaneOstaniPage from "../pages/sedaSima/BarnameOstani/ChandResaneOstaniPage"
import VezaratNaftPage from "../pages/dastresiVizhe/VezaratNaftPage"
import VezaratapPage from "../pages/dastresiVizhe/VezaratapPage"
import VezaratKeshvarPage from "../pages/dastresiVizhe/VezaratKeshvarPage"
import VezaratafaPage from '../pages/dastresiVizhe/VezaratafaPage'
import AccountGharargahNaftPage from "../pages/dastresiVizhe/Vezaratnaft/AccountGharargahNaftPage"
import ForodOstanPage from "../pages/ostanNama/ForodOstanPage"
import MainOstanPage from "../pages/ostanNama/MainOstanPage"






const router  = createBrowserRouter([
    {
     path : '/',
     element : <App/>,
     children : [
       {
         path : '',
         element : <MainPage/>,
        
   
       },
       {
         path : '/lahzenegar',
         element : <LahzeNegar/>
       },
       {
         path : '/asarsanji',
         element : <AsarSanjiPage/>,
         children : [
          {
            path : 'poyesh',
            element : <PoyeshPage/>
          }
         ]
       },
       {
        path : 'dastresivizhe',
        element : <DastresiVizhePage/>,  
        children : [
          {
            path : 'vezaratnaft',
            element : <VezaratNaftPage/>,
            children:[
              {
                path : 'otaghvaziatnaft',
                element : <OtaghvaziatVezaratNaftPage/>
              },
              {
                path : 'chehrenamanaft',
                element : <ChehreNamaVezaratNaftPage/>
              },
              {
                path : 'accountgharargahnaft',
                element : <AccountGharargahNaftPage/>
              },
           
            ]
          },
          {
            path : 'vezaratap',
            element : <VezaratapPage/>
          },
          {
            path : 'vezaratkeshvar',
            element: <VezaratKeshvarPage/>
          },
          {
            path : 'vezaratafa',
            element : <VezaratafaPage/>
          }
        ]        
        },
       {

    
        path : '/gozareshrasad',
        element : <GozareshRasadPage/>,
        children : [
          {
            path : 'revayateaval',
            element : <RevayateAval/>,          
          },
          

          
          {
            path : 'boomemasael',
            element : <BoomeMasael/>, 
          },
          {
            path : 'basterozane',
            element : <BasteRozane/>, 
          },
          {
            path : 'rahbordnegar',
            element : <RahbordNegar/>, 
          },
          {
            path : 'damasanj',
            element : <DamaSanj/>, 
          },
          {
            path : 'dadenama',
            element : <DadeNama/>, 
          },
          {
            path : 'shayeat',
            element : <Shayeat/>, 
          }
        ]
        },
       
       {
        path : '/parvande',
        element : <ParvandePage/>,
      
        },
        {
          path : 'parvande/:id', 
          element : <GozareshPage/>
        },
       {
         path : '/ostannama',
         element : <MainOstanPage/>,
         children:[
          {
            path : 'forodostan',
            element : <ForodOstanPage/>
          },
          {
            path : 'ostan',
            element : <OstanNama/>
          }
         ]
       },
       {
        path : '/sedasima',
        element : <SedaSimaPage/> ,
        children : [
          {
            path : 'rasadsima',
            element : <RasadSimaPage/>
          },
          {
            path : 'daraiisazman',
            element : <DaraiiSazmanPage/>
          },
          {
            path : 'accountsazman',
            element : <AccountSazmanPage/>
          },
          {

            path : 'baztabtv',
            element : <BaztabtvPage/> ,
            children:[
              {
                path : 'Maktob',
                element : <MaktobBaztabPage/>
              },
              {
                path : 'masrafeoperator',
                element : <MasrafeOperatorBaztabPage/>
              },
              {
                path : 'resane',
                element : <ChandResaneBaztabPage/>
              },
              {
                path : 'rasadonline',
                element : <RasadOnlineBaztabPage/>, 
               
              }

            ]
          },
          {
            path : 'otaghvaziat',
            element : <OtaghVaziatPage/>
          },
          {
            path : 'masrafoperator',
            element : <MasrafOperatorPage/>,
            children : [
              {
                path : 'moavenatsiasi',
                element : <MoanevatSiasiPage/>
              },
              {
                path : 'moavenatostan',
                element : <MoavenatOstanPage/>
              },
              {
                path : 'moavenatsima',
                element : <MoavenatSimaPage/>
              },
              {
                path : 'moavenatseda',
                element : <MoavenatSedaPage/>
              },
            ]
          },
          {
            path : 'tasvirchehre',
            element : <TasvirChehrePage/>,
          
          },
          {
            path : 'gozareshrasadi',
            element : <GozareshRasadi/>,
            children:[
              {
                path : 'afkarsanji',
                element : <AfkarSanjiGozareshRasadiPage/>
              },
              {
                path : 'rasadresanemeli',
                element : <RasadResaneMeliPage/>
              },

            ]
          },
          {
            path : 'barnameostani',
            element : <BarnameOstaniPage/>,
            children:[
              {
                path : 'chandresane',
                element : <ChandResaneOstaniPage/>
              },
              {
                path : 'maktob',
                element : <MaktobOstaniPage/>
              },
              {
                path : 'rasadonline',
                element : <RasadOnlineOstani/>
              },
              {
                path : 'masrafoperator',
                element : <MasrafOperatorOstani/>
              },

            ]
          },
         
        ]
      },
       {
         path : '/rasadnegar',
         element : <RasadNegar/>,
         
       },
       {
         path : '/profile',
         element : <Profile/>
       },
       {
         path : '/hoshnegar',
         element : <HoshNegar/>
       }
     ]
    },
    {
     path : '*',
     element : <NotFound/>
    },
    {
      path : '/login',
      element : <LoginPage/>
    },
    
   
   ])

export default router
