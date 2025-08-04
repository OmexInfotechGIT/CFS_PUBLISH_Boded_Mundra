    
     
    
 ALTER VIEW [dbo].[GetContainerInUsed]        
   AS          
     select       
     ROW_NUMBER() OVER(ORDER BY ID ASC) AS RowNum, * from (       
       SELECT CONTNO as ContainerNumber, trnCargoGateInContainerDetailsID as ID, 'trnCargoGateInContainerDetails' as table_name,'' as trnDocumentContainerID    
       FROM trnCargoGateInContainerDetails CGD      
       INNER JOIN trnCargoGateIn CG on CG.trnCargoGateInID = CGD.trnCargoGateInID and CG.Flagdeleted = 0 and (CG.IsFinished = 1 OR CG.trnCargoGateInID = CGD.trnCargoGateInID)    
       WHERE CGD.Flagdeleted = 0      
           
    UNION       
         
     SELECT ContainerNumber, trnDocumentContainerID as ID, 'trnDocumentContainer' as table_name,trnDocumentContainerID     
     FROM trnDocumentContainer     
     WHERE Flagdeleted = 0      
         
    UNION      
     SELECT COGD.ContNo, COGD.trnContainerGateInID as ID, 'trnContainerGateInDetails' as table_name,COGD.trnDocumentContainerID as trnDocumentContainerID    
     FROM trnContainerGateInDetails COGD       
     INNER JOIN trnContainerGateIn COG on COG.trnContainerGateInID = COGD.trnContainerGateInID and COG.Flagdeleted = 0     
     and COG.IsFinished = 1       
     WHERE COGD.Flagdeleted = 0     
         
    UNION     
     SELECT ECIWOCD.ContNo, ECIWOCD.trnEmptyContainerInWOContainerDetailsID as ID, 'trnEmptyContainerInWOContainerDetails' as table_name,ECIWOCD.trnDocumentContainerID as trnDocumentContainerID     
     FROM trnEmptyContainerInWOContainerDetails ECIWOCD       
     INNER JOIN trnEmptyContainerInWO ECIWO on ECIWO.trnEmptyContainerInWOID = ECIWOCD.trnEmptyContainerInWOID and ECIWO.Flagdeleted = 0     
     and ECIWO.IsFinished = 1       
     WHERE ECIWOCD.Flagdeleted = 0    
    
    UNION    
    
      SELECT ETGIDC.ContNo, ETGIDC.trnEmptyTruckGateInDomesticID as ID, 'trnEmptyTruckGateInDomestic' as table_name,'' as trnDocumentContainerID        
      FROM trnEmptyTruckGateInDomestic ETGIDC         
      INNER JOIN trnEmptyTruckGateIn ECIWO on ECIWO.trnEmptyTruckGateInID = ETGIDC.trnEmptyTruckGateInID and ECIWO.Flagdeleted = 0       
      AND (ECIWO.IsFinished = 1     OR ECIWO.trnEmptyTruckGateInID = ETGIDC.trnEmptyTruckGateInID)       
      WHERE ETGIDC.Flagdeleted = 0    
     ) as a    
         
     Where trnDocumentContainerID NOT IN (SELECT trnDocumentContainerID FROM trnEmptyContainerOutGatePassDetails CGD     
       INNER JOIN trnEmptyContainerOutGatePass CG on CG.trnEmptyContainerOutGatePassID = CGD.trnEmptyContainerOutGatePassID and CG.Flagdeleted = 0 and CG.IsFinished = 1 and CG.IsApproved = 1    
       --INNER JOIN trnEmptyTruckGateInEmpty EGE on EGE.trnEmptyTruckGateInEmptyID = CGD.trnEmptyTruckGateInEmptyID and EGE.Flagdeleted = 0    
       --INNER JOIN trnEmptyTruckGateIn EG on EG.trnEmptyTruckGateInID = EGE.trnEmptyTruckGateInID and EG.Flagdeleted = 0 and EG.IsFinished = 1 and EG.IsApproved = 1    
       INNER JOIN trnEmptyContainerOutWODetails ECWOD on ECWOD.trnEmptyContainerOutWODetailsID = CGD.trnEmptyContainerOutWODetailsID and ECWOD.Flagdeleted = 0     
       INNER JOIN trnEmptyContainerOutWO ECWO on ECWO.trnEmptyContainerOutWOID = ECWOD.trnEmptyContainerOutWOID and ECWO.Flagdeleted = 0     
       WHERE CGD.Flagdeleted = 0    
       UNION    
       SELECT LCGD.trnDocumentContainerID FROM trnLoadedContainerOutWODetails LCGD    
       INNER JOIN trnLoadedContainerOutWO LCG on LCG.trnLoadedContainerOutWOID = LCGD.trnLoadedContainerOutWOID and LCG.Flagdeleted = 0 and LCG.IsFinished = 1 and LCG.IsApproved = 1    
       WHERE LCGD.Flagdeleted = 0)    
    
    
    