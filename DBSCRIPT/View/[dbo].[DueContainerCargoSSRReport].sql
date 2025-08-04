CREATE  VIEW [dbo].[DueContainerCargoSSRReport]      
AS     
--CONTAINER SSR  
 SELECT  DISTINCT * FROM (  
     SELECT DISTINCT -- '6' AS  SRNO,  
     D.trnDocumentID  
     ,DL.BatchId  
     ,'CONTAINER' AS [SSR]  
     ,DL.IMPORTERID  
     ,DL.SubCHAID  
     ,DL.ForwarderID  
     ,D.AgentID  
     ,D.LineID  
     FROM trnDocument D 
     LEFT JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0 --and InType = 'CONTAINER' AND DeliveryMode = 'DESTUFF'  
     INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0    
     INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0  
     INNER JOIN trnContainerSSR ON trnContainerSSR.trnDocumentID = D.trnDocumentID AND trnContainerSSR.flagdeleted = 0  AND trnContainerSSR.IsFinished = 1  
     INNER JOIN trnContainerSSRDetails ON trnContainerSSRDetails.ContainerSSRID = trnContainerSSR.trnContainerSSRID  AND ContainerNumber = ContNo AND trnContainerSSRDetails.flagdeleted = 0                                     
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge.trnDocumentID = D.trnDocumentID  
            AND ConsolidatorCharge.Flagdeleted=0  
            AND ConsolidatorCharge.trnContainerSSRID=trnContainerSSR.trnContainerSSRID  
     WHERE   ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0  
     AND D.flagdeleted = 0 AND D.Status = 'D' AND D.IsFinished = 1   
     --CARGO SSR  
     UNION ALL  
     SELECT DISTINCT -- '7' AS  SRNO,  
     D.trnDocumentID  
                    ,trnCargoSSR.BatchNoID    
     ,'CARGO' AS [SSR]  
     ,DL.IMPORTERID  
        ,DL.SubCHAID  
        ,DL.ForwarderID  
        ,D.AgentID  
        ,D.LineID  
     FROM trnDocument D                                      
     INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentID = D.trnDocumentID and DL.flagdeleted = 0  
     INNER JOIN trnCargoSSR ON trnCargoSSR.trnDocumentID = D.trnDocumentID AND trnCargoSSR.flagdeleted = 0 AND trnCargoSSR.IsFinished = 1  
     INNER JOIN trnCargoSSRDetails ON trnCargoSSRDetails.trnCargoSSRID = trnCargoSSR.trnCargoSSRID    AND trnCargoSSRDetails.flagdeleted = 0                                   
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID  
            AND ConsolidatorCharge.Flagdeleted=0  
            AND ConsolidatorCharge.trnCargoSSRID=trnCargoSSR.trnCargoSSRID  
     WHERE   ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0  
    AND D.flagdeleted = 0 AND D.Status = 'D' AND D.IsFinished = 1 ) AS A  
  