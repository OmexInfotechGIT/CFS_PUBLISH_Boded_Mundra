  
  
-- Need to change stateid as per state   
CREATE view [dbo].[GenealTarrifData]  
as  
SELECT   
  G.MstrGeneralTariffID   
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
 ,G.Rate   
 ,G.MstrBatchID   
 ,G.Batch   
 ,G.Discount   
 ,G.RatePerMetricTon   
 ,G.RatePerUnit   
 ,E.EffetiveDateFrom   
 ,E.EffectiveToDate   
 ,G.Number   
 ,G.StoragePattern   
 ,G.FromDays   
 ,G.ToDays   
 ,G.MstrUomID   
 ,G.UOM   
 ,G.RateOfArea   
 ,G.StorageAreaReferenceNumber   
 ,G.FromWeek   
 ,G.ToWeek  
 ,G.YearID  
 ,G.MstrGeneralTariffEffetiveDateID  
 ,G.DeliveryModeID  
 ,G.DeliveryMode  
 , ISNULL((select ISNULL(SUM(ISNULL(Rate,0)),0) from MstrTariffHead T   
   INNER JOIN MstrTaxGroup TG On TG.HsnSacCode = T.HsnSacCode and TG.flagdeleted = 0  
   INNER JOIN MSTRStateTax ST on ST.TaxGrpID = TG.MstrTaxGroupID and ST.flagdeleted = 0  
   INNER JOIN MstrSubStateTaxRate SST on SST.MstrStateTaxID = ST.MSTRStateTaxID and SST.flagdeleted = 0   
   WHERE T.flagdeleted = 0 and T.MstrTariffHeadID = G.MstrTariffHeadID and SST.StateID = 12),0) as GSTPER  
  
FROM MstrGeneralTariff G  
INNER JOIN MstrGeneralTariffEffetiveDate E on E.MstrGeneralTariffEffetiveDateID = G.MstrGeneralTariffEffetiveDateID and E.flagdeleted = 0  
WHERE G.flagdeleted = 0   
   
  