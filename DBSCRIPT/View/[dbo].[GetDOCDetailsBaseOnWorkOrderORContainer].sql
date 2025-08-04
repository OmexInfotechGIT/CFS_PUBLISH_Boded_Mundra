ALTER VIEW [dbo].[GetDOCDetailsBaseOnWorkOrderORContainer] AS              
               
 (SELECT SearchType = 'Truck',  Wo.trnWorkOrderID, FORMAT(D.CreatedDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') as DocDate            
 ,(D.trnDocumentPrefix+D.trnDocumentNo) as trnDocumentNo,DLD.BOENo, FORMAT(DLD.BOEDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS BOEDate   ,'Gate In' as mode           
 FROM trnWorkOrder  WO                
 INNER JOIN trnWorkOrderlotdetails LD ON LD.trnWorkOrderID = WO.trnWorkOrderID AND LD.Flagdeleted = 0                
 INNER JOIN trnDocumentLotDetails DLD ON DLD.trnDocumentLotDetailsID=LD.trnDocumentLotDetailsID AND DLD.Flagdeleted = 0                
 INNER JOIN trnDocument D ON D.trnDocumentID = DLD.trnDocumentID AND D.flagdeleted = 0                   
 WHERE WO.Flagdeleted=0             
             
UNION               
 SELECT SearchType = 'Truck',  woo.trnWorkOrderOutID, FORMAT(D.CreatedDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') as DocDate            
 ,(D.trnDocumentPrefix+D.trnDocumentNo) AS trnDocumentNo,EXDED.EXBOEOrSBNo AS BOENo, FORMAT(EXDED.EXBOEOrSBDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS BOEDate  ,'Gate Out' as mode             
 FROM trnWorkOrderOut  WOO                
 INNER JOIN trnWorkOrderOutlotdetails WOLD ON WOLD.trnWorkOrderOutID = WOO.trnWorkOrderOutID AND WOLD.flagdeleted = 0      
 INNER JOIN trnExBondDocumentEntryDetails EXDED ON EXDED.trnExBondDocumentEntryDetailsID=WOLD.trnExBondDocumentEntryDetailsID AND EXDED.Flagdeleted=0    
 INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnExBondDocumentEntryID=EXDED.trnExBondDocumentEntryID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
 INNER JOIN trnDocumentLotDetails DLD ON DLD.trnDocumentLotDetailsID=EXDE.trnDocumentLotDetailsID AND DLD.flagdeleted = 0                
 INNER JOIN trnDocument D on D.trnDocumentID = DLD.trnDocumentID AND D.flagdeleted = 0                
 WHERE WOO.Flagdeleted=0              
)            
 UNION               
 SELECT SearchType = 'Container', DC.trnDocumentContainerID as trnWorkOrderID, FORMAT(D.CreatedDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS DocDate              
 ,(D.trnDocumentPrefix+D.trnDocumentNo) as trnDocumentNo , DL.BOENo, FORMAT(DL.BOEDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS BOEDate  ,'Gate In' as mode          
 from  trnDocumentContainer DC                
 INNER JOIN trnDocument D on D.trnDocumentID = DC.trnDocumentID and D.flagdeleted = 0              
 INNER JOIN trnDocumentContainerForLot DCL ON DCL.trnDocumentContainerID=DC.trnDocumentContainerID AND DCL.Flagdeleted=0            
 INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCL.trnDocumentLotDetailsID AND DL.flagdeleted = 0              
 where  DC.flagdeleted = 0     
 UNION               
 SELECT SearchType = 'Container', DC.trnDocumentContainerID as trnWorkOrderID, FORMAT(D.CreatedDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS DocDate              
 ,(D.trnDocumentPrefix+D.trnDocumentNo) as trnDocumentNo , DL.BOENo, FORMAT(DL.BOEDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') AS BOEDate  ,'Gate Out' as mode          
 from  trnDocumentContainer DC                
 INNER JOIN trnDocument D on D.trnDocumentID = DC.trnDocumentID and D.flagdeleted = 0              
 INNER JOIN trnDocumentContainerForLot DCL ON DCL.trnDocumentContainerID=DC.trnDocumentContainerID AND DCL.Flagdeleted=0            
 INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCL.trnDocumentLotDetailsID AND DL.flagdeleted = 0              
 where  DC.flagdeleted = 0     
  
 UNION  
  
 SELECT DISTINCT SearchType='ExportContainer',ETGI.trnEmptyTruckGateInID as trnWorkOrderID  
 ,STUFF((SELECT DISTINCT +','+ FORMAT(D.CreatedDate ,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') FROM trnDocument D  
   INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0  
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnDocumentLotDetailsID=DL.trnDocumentLotDetailsID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExBondDocumentEntryDetails EXDED ON EXDED.trnExBondDocumentEntryID=EXDE.trnExBondDocumentEntryID  AND EXDED.Flagdeleted=0  
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE D.Flagdeleted=0 AND D.IsFinished=1 AND D.Status='D' FOR XML PATH('')),1,1,'') as DocDate  
  
,STUFF((SELECT DISTINCT +','+ (D.trnDocumentPrefix+D.trnDocumentNo) FROM trnDocument D  
   INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0  
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnDocumentLotDetailsID=DL.trnDocumentLotDetailsID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExBondDocumentEntryDetails EXDED ON EXDED.trnExBondDocumentEntryID=EXDE.trnExBondDocumentEntryID  AND EXDED.Flagdeleted=0  
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE D.Flagdeleted=0 AND D.IsFinished=1 AND D.Status='D' FOR XML PATH('')),1,1,'') as trnDocumentNo  
  
,STUFF((SELECT DISTINCT +','+ EXBOEOrSBNo FROM  trnExBondDocumentEntryDetails EXDED   
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnExBondDocumentEntryID=EXDED.trnExBondDocumentEntryID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE EXDED.Flagdeleted=0 FOR XML PATH('')),1,1,'') as BOENo  
  
,STUFF((SELECT DISTINCT +','+ FORMAT(EXBOEOrSBDate ,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') FROM  trnExBondDocumentEntryDetails EXDED   
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnExBondDocumentEntryID=EXDED.trnExBondDocumentEntryID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE EXDED.Flagdeleted=0 FOR XML PATH('')),1,1,'') as BOEDate  
,'Gate Out' as mode  
 FROM  trnEmptyTruckGateInLoaded  ETGIL  
 INNER JOIN trnEmptyTruckGateIn ETGI ON ETGI.trnEmptyTruckGateInID=ETGIL.trnEmptyTruckGateInID AND ETGI.IsFinished=1 AND ETGI.Flagdeleted=0 AND ETGI.Category ='Export' AND ETGI.Type='Regular Container'  
 INNER JOIN trnExportMovementWOContainerDetails EMWOD ON EMWOD.trnExportMovementWOContainerDetailsID=ETGIL.trnExportMovementWOContainerDetailsID AND EMWOD.Flagdeleted=0  
 INNER JOIN trnExportMovementWO EMWO ON EMWO.trnExportMovementWOID=EMWOD.trnExportMovementWOID AND EMWO.Flagdeleted=0 AND EMWO.IsFinished=1 AND EMWO.IsApproved=1  
 INNER JOIN trnexportstufingwoContainerDetails ESWOCD ON ESWOCD.trnexportstufingwoContainerDetailsID=EMWOD.trnexportstufingwoContainerDetailsID AND ESWOCD.Flagdeleted=0  
 INNER JOIN trnExportStufingWO ESWO ON ESWO.trnExportStufingWOID=ESWOCD.trnExportStufingWOID AND ESWO.Flagdeleted=0 AND ESWO.IsFinished=1              
 WHERE ETGIL.Flagdeleted=0  and ISNULL(ETGIL.trnexportmovementWOContainerDetailsID,0)!=0  
  
  UNION  
  
 SELECT DISTINCT SearchType='ExportTruck',ETGI.trnEmptyTruckGateInID as trnWorkOrderID  
 ,STUFF((SELECT DISTINCT +','+ FORMAT(D.CreatedDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') FROM trnDocument D  
   INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0  
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnDocumentLotDetailsID=DL.trnDocumentLotDetailsID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExBondDocumentEntryDetails EXDED ON EXDED.trnExBondDocumentEntryID=EXDE.trnExBondDocumentEntryID  AND EXDED.Flagdeleted=0  
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE D.Flagdeleted=0 AND D.IsFinished=1 AND D.Status='D' FOR XML PATH('')),1,1,'') as DocDate  
  
,STUFF((SELECT DISTINCT +','+ (D.trnDocumentPrefix+D.trnDocumentNo) FROM trnDocument D  
   INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0  
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnDocumentLotDetailsID=DL.trnDocumentLotDetailsID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExBondDocumentEntryDetails EXDED ON EXDED.trnExBondDocumentEntryID=EXDE.trnExBondDocumentEntryID  AND EXDED.Flagdeleted=0  
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE D.Flagdeleted=0 AND D.IsFinished=1 AND D.Status='D' FOR XML PATH('')),1,1,'') as trnDocumentNo  
  
,STUFF((SELECT DISTINCT +','+ EXBOEOrSBNo FROM  trnExBondDocumentEntryDetails EXDED   
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnExBondDocumentEntryID=EXDED.trnExBondDocumentEntryID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE EXDED.Flagdeleted=0 FOR XML PATH('')),1,1,'') as BOENo  
  
,STUFF((SELECT DISTINCT +','+ FORMAT(EXBOEOrSBDate,+''+(SELECT StrValue FROM ADMIN.GENERALSETTINGS WHERE StrKey='DF')+'') FROM  trnExBondDocumentEntryDetails EXDED   
   INNER JOIN trnExBondDocumentEntry EXDE ON EXDE.trnExBondDocumentEntryID=EXDED.trnExBondDocumentEntryID AND EXDE.Flagdeleted=0 AND EXDE.IsFinished=1    
   INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExBondDocumentEntryDetailsID=EXDED.trnExBondDocumentEntryDetailsID AND EDDLD.Flagdeleted=0  
   INNER JOIN trnExportStufingWOSBDetails ESBSWO ON ESBSWO.trnExportDocumentDeclarationLotDetailsID=EDDLD.trnExportDocumentDeclarationLotDetailsID AND ESBSWO.Flagdeleted=0   
   AND ESBSWO.trnExportStufingWOID=ESWO.trnExportStufingWOID  
  WHERE EXDED.Flagdeleted=0 FOR XML PATH('')),1,1,'') as BOEDate  
,'Gate Out' as mode  
 FROM  trnEmptyTruckGateInLoaded  ETGIL  
 INNER JOIN trnEmptyTruckGateIn ETGI ON ETGI.trnEmptyTruckGateInID=ETGIL.trnEmptyTruckGateInID AND ETGI.IsFinished=1 AND ETGI.Flagdeleted=0 AND ETGI.Category ='Export' AND ETGI.Type='Regular Container'  
 INNER JOIN trnExportMovementWOContainerDetails EMWOD ON EMWOD.trnExportMovementWOContainerDetailsID=ETGIL.trnExportMovementWOContainerDetailsID AND EMWOD.Flagdeleted=0  
 INNER JOIN trnExportMovementWO EMWO ON EMWO.trnExportMovementWOID=EMWOD.trnExportMovementWOID AND EMWO.Flagdeleted=0 AND EMWO.IsFinished=1 AND EMWO.IsApproved=1  
 INNER JOIN trnexportstufingwoContainerDetails ESWOCD ON ESWOCD.trnexportstufingwoContainerDetailsID=EMWOD.trnexportstufingwoContainerDetailsID AND ESWOCD.Flagdeleted=0  
 INNER JOIN trnExportStufingWO ESWO ON ESWO.trnExportStufingWOID=ESWOCD.trnExportStufingWOID AND ESWO.Flagdeleted=0 AND ESWO.IsFinished=1              
 WHERE ETGIL.Flagdeleted=0 AND ISNULL(ETGIL.trnexportmovementWOContainerDetailsID,0)!=0  