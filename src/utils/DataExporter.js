import Constantes from './Constantes.js'
import CFPApi from '../api/CFPApi.js'
export default class DataExporter{


  static exportCSVFile(fileType,selectedClasseProduitId,date,todate){
    if(fileType=="detail")
      window.open(Constantes.URL+'Action/exportListDetail/?selectedClasseProduitId='+selectedClasseProduitId+'&datePosition='+date)
    else if(fileType=="synthese")
      window.open(Constantes.URL+'Common/exportListSynthese/?datePosition='+date)
    else if(fileType=="historique")
        window.open(Constantes.URL+'Common/exportHistorique/?fromdate='+date+'&todate='+todate)
  }

}
