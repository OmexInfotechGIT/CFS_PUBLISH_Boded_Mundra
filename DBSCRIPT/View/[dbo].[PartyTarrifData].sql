USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  View [dbo].[PartyTarrifData]    Script Date: 5/10/2024 6:36:40 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[PartyTarrifData]      
AS      
SELECT       
  G.MstrGeneralTariffPartyWiseID       
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
 ,G.Rate AS actualrate      
 , (CASE WHEN (SELECT UnitType FROM mstrtariffhead M WHERE M.flagdeleted = 0 AND M.MstrTariffHeadID = G.MstrTariffHeadID) = 'Weight BASed' THEN G.RateOfArea ELSE G.Rate END) AS Rate        
 ,G.Discount       
 ,G.RatePerMetricTon       
 ,G.RatePerUnit       
 ,E.EffetiveDateFROM       
 ,E.EffectiveToDate       
 ,0 AS MstrBatchID       
 ,'' AS Batch       
 ,G.Number       
 ,G.StoragePattern       
 ,G.FROMDays       
 ,G.ToDays       
 ,G.MstrUomID       
 ,G.UOM       
 ,G.RateOfArea       
 ,E.TeriffNo       
 ,G.FROMWeek       
 ,G.ToWeek      
 ,G.YearID      
 ,G.MstrGeneralTariffPartyWiseEffetiveDateID      
 ,G.DeliveryModeID      
 ,G.DeliveryMode      
  , ISNULL((SELECT ISNULL(SUM(ISNULL(Rate,0)),0) FROM MstrTariffHead T       
      INNER JOIN MstrTaxGroup TG ON TG.HsnSacCode = T.HsnSacCode AND TG.flagdeleted = 0      
      INNER JOIN MSTRStateTax ST ON ST.TaxGrpID = TG.MstrTaxGroupID AND ST.flagdeleted = 0      
      INNER JOIN MstrSubStateTaxRate SST ON SST.MstrStateTaxID = ST.MSTRStateTaxID AND SST.flagdeleted = 0       
   WHERE T.flagdeleted = 0 AND T.MstrTariffHeadID = G.MstrTariffHeadID   
      AND SST.StateID = (SELECT TOP 1 StateId FROM trnDocument D    
             INNER JOIN trnDocumentLotDetails DL ON DL.trnDocumentID=D.trnDocumentID AND DL.Flagdeleted=0   AND DL.IMPORTERID=MstrGeneralTariffPartyWiseDetails.MstrCustomerID  
             INNER JOIN MstrAddresses A ON A.MstrCustomerID = DL.IMPORTERID  AND DL.IMPORTERADDRESSID = A.MstrAddressesID  AND A.Flagdeleted = 0       
             WHERE D.Flagdeleted=0 AND D.Status='D' AND D.IsFinished=1  )),0) AS GSTPER  
,MstrGeneralTariffPartyWiseDetails.MstrCustomerID  
FROM MstrGeneralTariffPartyWise G      
INNER JOIN MstrGeneralTariffPartyWiseEffetiveDate E ON E.MstrGeneralTariffPartyWiseEffetiveDateID = G.MstrGeneralTariffPartyWiseEffetiveDateID AND E.flagdeleted = 0      
 INNER JOIN MstrGeneralTariffPartyWiseDetails ON MstrGeneralTariffPartyWisedetails.MstrGeneralTariffPartyWiseEffetiveDateID = E.MstrGeneralTariffPartyWiseEffetiveDateID                                        
WHERE G.flagdeleted = 0       