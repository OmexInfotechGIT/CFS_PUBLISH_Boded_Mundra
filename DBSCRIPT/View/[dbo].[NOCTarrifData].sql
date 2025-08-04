    
    
    
ALTER view [dbo].[NOCTarrifData]    
as    
SELECT     
  G.MstrGeneralTariffNOCWiseID     
 ,G.TariffHeadName     
 ,G.MstrTariffHeadID     
 ,G.ContSizeID     
 ,G.CargoSize     
 ,G.MstrNatureOfCargoID     
 ,G.CargoType     
 ,G.MstrBillableCommodityID     
 ,G.BillCommodity     
 ,G.MstrSubCommodityID     
 ,G.SubCommodity     
 ,G.Rate as actualrate    
 , (CASE WHEN (select UnitType from mstrtariffhead M where M.flagdeleted = 0 and M.MstrTariffHeadID = G.MstrTariffHeadID) = 'Weight Based' THEN G.RateOfArea ELSE G.Rate END) as Rate      
 ,G.Discount     
 ,G.RatePerMetricTon     
 ,G.RatePerUnit     
 ,E.EffetiveDateFrom     
 ,E.EffectiveToDate     
 ,0 as MstrBatchID     
 ,'' as Batch     
 ,G.Number     
 ,G.StoragePattern     
 ,G.FromDays     
 ,G.ToDays     
 ,G.MstrUomID     
 ,G.UOM     
 ,G.RateOfArea     
 ,E.TeriffNo     
 ,G.FromWeek     
 ,G.ToWeek    
 ,G.YearID    
 ,G.MstrGeneralTariffNOCWiseEffetiveDateID    
 ,G.DeliveryModeID    
 ,G.DeliveryMode    
 , ISNULL((select ISNULL(SUM(ISNULL(Rate,0)),0) from MstrTariffHead T     
   INNER JOIN MstrTaxGroup TG On TG.HsnSacCode = T.HsnSacCode and TG.flagdeleted = 0    
   INNER JOIN MSTRStateTax ST on ST.TaxGrpID = TG.MstrTaxGroupID and ST.flagdeleted = 0    
   INNER JOIN MstrSubStateTaxRate SST on SST.MstrStateTaxID = ST.MSTRStateTaxID and SST.flagdeleted = 0     
   WHERE T.flagdeleted = 0 and T.MstrTariffHeadID = G.MstrTariffHeadID and SST.StateID = (SELECT TOP 1 StateId FROM trnDocument D  
               INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0   
               INNER JOIN MstrAddresses A ON A.MstrCustomerID = DL.IMPORTERID  AND DL.IMPORTERADDRESSID = A.MstrAddressesID  AND A.Flagdeleted = 0     
               WHERE D.Flagdeleted=0 AND D.Status='D' AND D.IsFinished=1 AND D.trnDocumentID= MstrGeneralTariffNOCWisedetails.trnDocumentID )),0) as GSTPER    
 , MstrGeneralTariffNOCWisedetails.trnDocumentID    
 , MstrGeneralTariffNOCWisedetails.trnDocumentNo 
 ,ISNULL(MstrGeneralTariffNOCWisedetails.trnDocumentLotDetailsID,0) AS trnDocumentLotDetailsID
,(SELECT MIN(CreatedDate) FROM trnDocument WHERE trnDocumentID = MstrGeneralTariffNOCWisedetails.trnDocumentID AND Flagdeleted=0 AND IsFinished=1) AS StorageStartDate    
FROM MstrGeneralTariffNOCWise G    
INNER JOIN MstrGeneralTariffNOCWiseEffetiveDate E on E.MstrGeneralTariffNOCWiseEffetiveDateID = G.MstrGeneralTariffNOCWiseEffetiveDateID and E.flagdeleted = 0    
 INNER JOIN MstrGeneralTariffNOCWisedetails on MstrGeneralTariffNOCWisedetails.MstrGeneralTariffNOCWiseEffetiveDateID = E.MstrGeneralTariffNOCWiseEffetiveDateID                                      
WHERE G.flagdeleted = 0     
     
    
  
  