
Create  VIEW [dbo].[DueHandlingInvoiceReport]      
AS                               
  --WH - H & T Charges For Loaded Delivery  
       --WH - H & T Charges For Loaded Delivery    
        SELECT DISTINCT * FROM (SELECT DISTINCT -- '1' AS  SRNO,    
                 D.trnDocumentID,DL.BatchId   
     ,DL.IMPORTERID  
     ,DL.SubCHAID  
     ,DL.ForwarderID  
     ,D.AgentID  
        ,D.LineID  
                FROM  trnDocument D    
                INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0 AND InType = 'CONTAINER' AND DeliveryMode = 'LOADED'    
                INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
                INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0      
                INNER JOIN trnContainerGateInDetails CG ON CG.trnDocumentContainerID = DC.trnDocumentContainerID AND CG.flagdeleted = 0    
                INNER JOIN trnContainerGateIn CGF ON CGF.trnContainerGateInID = CG.trnContainerGateInID AND CGf.flagdeleted = 0 and CGF.IsFinished = 1    
                LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
               AND ConsolidatorCharge.Flagdeleted=0    
               AND ConsolidatorCharge.trnContainerGateInID=  CGF.trnContainerGateInID    
                WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
                    AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0                      
     UNION ALL     
                --WH - H & T Charges For Destuff Delivery    
          SELECT DISTINCT -- '2' AS  SRNO,    
                 D.trnDocumentID    
      ,DL.BatchId   
      ,DL.IMPORTERID  
      ,DL.SubCHAID  
      ,DL.ForwarderID  
      ,D.AgentID  
      ,D.LineID  
                    FROM  trnDocument D 
                    INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0 AND InType = 'CONTAINER' AND DeliveryMode = 'DESTUFF'    
                    INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
                    INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0     
                    INNER JOIN trnContainerGateInDetails CG ON CG.trnDocumentContainerID = DC.trnDocumentContainerID AND CG.flagdeleted = 0    
                    INNER JOIN trnContainerGateIn CGF ON CGF.trnContainerGateInID = CG.trnContainerGateInID AND CGf.flagdeleted = 0 and CGF.IsFinished = 1    
                    LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
                AND ConsolidatorCharge.Flagdeleted=0    
                AND ConsolidatorCharge.trnContainerGateInID=  CGF.trnContainerGateInID  AND ConsolidatorCharge.ContainerNumber =CG.ContNo    
                    WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
                     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0       
      UNION ALL     
                                    --WH - Cargo Handling Charges (Inward) - Per Unit >> Container Destuff    
                                    --WH - Cargo Handling Charges (Inward) - Per Ton  >> Container Destuff    
     SELECT DISTINCT -- '3' AS  SRNO,    
    D.trnDocumentID    
    ,DL.BatchId   
    ,DL.IMPORTERID  
    ,DL.SubCHAID  
    ,DL.ForwarderID  
    ,D.AgentID  
    ,D.LineID  
    FROM trnDocument D 
    INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0 AND InType = 'CONTAINER' AND DeliveryMode = 'DESTUFF'    
    INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
    INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0    
    INNER JOIN trnContainerGateInDetails CG ON CG.trnDocumentContainerID = DC.trnDocumentContainerID AND CG.flagdeleted = 0    
    INNER JOIN trnContainerGateIn CGF ON CGF.trnContainerGateInID = CG.trnContainerGateInID  AND CGf.flagdeleted = 0 and CGF.IsFinished = 1    
    INNER JOIN trnContainerDestuffing CD ON CD.trnContainerGateInDetailsID = CG.trnContainerGateInDetailsID AND CD.Flagdeleted = 0 AND CD.isfinished = 1    
    LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
    AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.trnContainerDestuffingID= CD.trnContainerDestuffingID    
    WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
    AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0            
    --WH - Cargo Handling Charges (Inward) - Per Unit  >> Truck Destuff    
    --WH - Cargo Handling Charges (Inward) - Per Ton   >> Truck Destuff    
    UNION ALL    
        SELECT DISTINCT -- '4' AS  SRNO,    
                 D.trnDocumentID    
     ,DL.BatchId    
     ,DL.IMPORTERID  
     ,DL.SubCHAID  
     ,DL.ForwarderID  
     ,D.AgentID  
        ,D.LineID  
            FROM  trnDocument D
            INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID = D.trnDocumentID AND DL.flagdeleted = 0    
   INNER JOIN trnTruckDestuffingDetails WDLD ON WDLD.trnDocumentLotDetailsID =  DL.trnDocumentLotDetailsID    
            INNER JOIN trnTruckDestuffing TD ON TD.trnTruckDestuffingID = WDLD.trnTruckDestuffingID AND TD.isfinished = 1 AND TD.flagdeleted = 0    
            INNER JOIN trnCargoGateIn CGF ON CGF.WorkOrderID = TD.WorkOrderID AND CGF.flagdeleted = 0 AND CGF.IsFinished = 1    
            LEFT JOIN trnWeighmentSlip WS ON WS.searchID = TD.WorkOrderID AND SearchType = 'Truck' AND Mode ='Gate In' AND WS.flagdeleted = 0 AND WS.IsFinished = 1    
            LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
            AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.trnTruckDestuffingID= TD.trnTruckDestuffingID    
            WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
            AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
   --WH - Cargo Handling Charges (Outward) - Per Unit >> Stuffing Request     
            --WH - Cargo Handling Charges (Outward) - Per Ton >> Stuffing Request     
     UNION ALL    
     SELECT DISTINCT -- '5' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId    
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM  trnDocument D     
     INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID =D.trnDocumentID AND DL.flagdeleted = 0    
     INNER JOIN trnCargoTruckOutwardCumGatepassDetails OCGD ON OCGD.trnDocumentLotDetailsID = DL.trnDocumentLotDetailsID AND OCGD.flagdeleted = 0                                        
     INNER JOIN  trnCargoTruckOutwardCumGatepass OCG ON OCG.trnCargoTruckOutwardCumGatepassID = OCGD.trnCargoTruckOutwardCumGatepassID AND OCG.flagdeleted = 0 AND OCG.isfinished = 1    
     LEFT JOIN trnCargoTruckOutwardCumGatepassContainerDetails OCGC ON OCGC.trnCargoTruckOutwardCumGatepassID = OCG.trnCargoTruckOutwardCumGatepassID AND OCGC.flagdeleted = 0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
     AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.WorkOrderID= OCG.WorkOrderID    
     WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0     
       
     UNION ALL    
     SELECT DISTINCT  -- '8' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId    
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM trnDocument D 
     INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0    
     INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
     INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0    
     LEFT JOIN trnContainerGateInDetails CG ON CG.trnDocumentContainerID = DC.trnDocumentContainerID AND CG.flagdeleted = 0    
     LEFT JOIN trnContainerGateIn CGF ON CGF.trnContainerGateInID = CG.trnContainerGateInID AND CGf.flagdeleted = 0   and CGF.IsFinished = 1                                       
     INNER JOIN trnContainerWeighmentDetails WD ON WD.trnDocumentContainerID = DC.trnDocumentContainerID AND WD.flagdeleted = 0    
     INNER JOIN SSRInvoice    ON SSRInvoice.InfoID = WD.trnContainerWeighmentDetailsID AND InfoTableName = 'trnContainerWeighmentDetails' AND SSRInvoice.Flagdeleted=0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
     AND ConsolidatorCharge.Flagdeleted=0 AND ConsolidatorCharge.SSRInvoiceID=SSRInvoice.SSRInvoiceID    
     WHERE  D.flagdeleted = 0 AND D.IsFinished = 1    
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
     --CONTAINER OUT  SSR WEIGHMENT CHARGES    
     UNION ALL    
     SELECT DISTINCT -- '9' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId   
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM trnDocument D  
     INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0    
     INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
     INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0    
     INNER JOIN trnLoadedContainerOutWODetails WD ON WD.trnLoadedContainerOutWODetailsID = DC.trnDocumentContainerID AND WD.flagdeleted = 0    
     INNER JOIN SSRInvoice    ON SSRInvoice.InfoID = WD.trnLoadedContainerOutWODetailsID AND InfoTableName = 'trnLoadedContainerOutWODetails' AND SSRInvoice.Flagdeleted=0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
     AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.SSRInvoiceID=SSRInvoice.SSRInvoiceID     
     WHERE  D.flagdeleted = 0 AND D.IsFinished = 1     
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0      
     --CARGO In  SSR WEIGHMENT CHARGES    
     UNION ALL    
     SELECT DISTINCT -- '10' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId   
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM trnDocument D 
     INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID = D.trnDocumentID AND DL.flagdeleted = 0    
     INNER JOIN trnWorkOrderLotDetails WD ON DL.trnDocumentLotDetailsID = WD.trnDocumentLotDetailsID AND DL.flagdeleted = 0    
     INNER JOIN SSRInvoice    ON SSRInvoice.InfoID = WD.trnWorkOrderLotDetailsID AND InfoTableName = 'trnWorkOrderLotDetails' AND SSRInvoice.Flagdeleted=0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID     
     AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.SSRInvoiceID=SSRInvoice.SSRInvoiceID    
     WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
     --CARGO OUT  SSR WEIGHMENT CHARGES    
     UNION ALL    
     SELECT DISTINCT  -- '11' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId   
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM trnDocument D  
     INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID = D.trnDocumentID AND DL.flagdeleted = 0    
     INNER JOIN trnWorkOrderOutLotDetails WD ON WD.trnDocumentLotDetailsID = DL.trnDocumentLotDetailsID AND WD.flagdeleted = 0                                        
     INNER JOIN SSRInvoice    ON SSRInvoice.InfoID = WD.trnWorkOrderOutLotDetailsID AND InfoTableName = 'trnWorkOrderOutLotDetails' AND SSRInvoice.Flagdeleted=0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
     AND ConsolidatorCharge.Flagdeleted=0   AND ConsolidatorCharge.SSRInvoiceID=SSRInvoice.SSRInvoiceID    
     WHERE D.flagdeleted = 0 AND D.IsFinished = 1     
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
                                   
                                        
     --WH - Reefer Plug in/Plug Out Charges    
     UNION ALL   
  SELECT DISTINCT -- '12' AS  SRNO,    
    D.trnDocumentID    
    ,DL.BatchId    
    ,DL.IMPORTERID  
    ,DL.SubCHAID  
    ,DL.ForwarderID  
    ,D.AgentID  
    ,D.LineID  
     FROM trnDocument D 
     INNER JOIN trnDocumentContainer DC ON DC.trnDocumentID = D.trnDocumentID AND DC.flagdeleted = 0                                       
     INNER JOIN trnDocumentContainerForLot DCLot on DCLot.trnDocumentContainerID = DC.trnDocumentContainerID and DCLot.flagdeleted = 0      
     INNER JOIN trnDocumentLotDetails DL on DL.trnDocumentLotDetailsID = DCLot.trnDocumentLotDetailsID and DL.flagdeleted = 0    
     INNER JOIN trnReeferPluginOut   ON DC.trnDocumentContainerID=trnReeferPluginOut.ContNoID  AND trnReeferPluginOut.flagdeleted = 0 AND trnReeferPluginOut.IsFinished = 1     
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
     AND ConsolidatorCharge.Flagdeleted=0  AND ConsolidatorCharge.trnReeferPluginOutID=trnReeferPluginOut.trnReeferPluginOutID    
     WHERE ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
     AND D.flagdeleted = 0 AND D.IsFinished = 1     
     --WH - H & T charges - Export    
     UNION ALL    
  SELECT DISTINCT -- '13' AS  SRNO,    
    D.trnDocumentID    
    ,DL.BatchId    
    ,DL.IMPORTERID  
    ,DL.SubCHAID  
    ,DL.ForwarderID  
    ,D.AgentID  
    ,D.LineID  
     from trnexportmovementWO EMWO    
     INNER JOIN trnexportmovementWOContainerDetails EMCD ON EMCD.trnexportmovementWOid= EMWO.trnexportmovementWOid AND EMCD.Flagdeleted=0    
     INNER JOIN trnexportstufingwoContainerDetails ESCD ON ESCD.trnexportstufingwoContainerDetailsID=EMCD.trnexportstufingwoContainerDetailsID AND ESCD.Flagdeleted=0    
     INNER JOIN trnExportCLP  AS CLP ON CLP.trnexportstufingwoContainerDetailsID = ESCD.trnexportstufingwoContainerDetailsID AND CLP.flagdeleted=0   AND CLP.isfinished=1    
     INNER JOIN trnexportstufingwo ESWO ON ESWO.trnexportstufingwoID =ESCD.trnexportstufingwoID AND ESWO.Flagdeleted=0 AND ESWO.IsFinished=1    
     INNER JOIN trnexportstufingwoSBDetails SBD ON SBD.trnexportstufingwoID=ESWO.trnexportstufingwoID AND SBD.Flagdeleted=0    
     INNER JOIN trnExportDocumentDeclarationLotDetails EDDLD ON EDDLD.trnExportDocumentDeclarationLotDetailsID=SBD.trnExportDocumentDeclarationLotDetailsID AND EDDLD.Flagdeleted=0    
     Inner JOIN trnExportDocumentDeclaration EDD on EDD.trnExportDocumentDeclarationID = EDDLD.trnExportDocumentDeclarationID    
     INNER JOIN trnDocument D ON D.trnDocumentID = D.trnDocumentID AND D.flagdeleted = 0 AND D.Status = 'D'      
     INNER JOIN trnDocumentLotDetails DL ON 'LOT'+DL.LOTNO =EDDLD.LOTNO AND  dl.trnDocumentID = d.trnDocumentID  AND DL.flagdeleted = 0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge on ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
            AND ConsolidatorCharge.Flagdeleted=0   AND ConsolidatorCharge.trnexportmovementWOContainerDetailsID=EMCD.trnexportmovementWOContainerDetailsID    
     where EMWO.isapproved = 1 and EMWO.flagdeleted = 0     
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0    
                                       
                                         
     --WH - Fixed Handling Charges    
     UNION ALL    
     SELECT DISTINCT  -- '14' AS  SRNO,    
   D.trnDocumentID    
   ,DL.BatchId    
   ,DL.IMPORTERID  
   ,DL.SubCHAID  
   ,DL.ForwarderID  
   ,D.AgentID  
   ,D.LineID  
     FROM trnDocument D  
     INNER JOIN trnDocumentLotDetails DL ON  dl.trnDocumentID = d.trnDocumentID  AND DL.flagdeleted = 0    
     LEFT JOIN HandlingInvoiceConsolidatorCharge AS ConsolidatorCharge    
     JOIN HandlingInvoice ON HandlingInvoice.HandlingInvoiceID=ConsolidatorCharge.HandlingInvoiceID     
         AND HandlingInvoice.IsFinished=1 AND HandlingInvoice.Flagdeleted=0     
     ON ConsolidatorCharge. trnDocumentID = D.trnDocumentID    
            AND ConsolidatorCharge.Flagdeleted=0     
     WHERE   D.Flagdeleted=0 AND D.IsFinished=1      
     AND ISNULL(ConsolidatorCharge.HandlingInvoiceConsolidatorChargeID,0)=0 ) AS A   
                                      
                                           
  