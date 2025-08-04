--drop FUNCTION [dbo].[GetTriffHead]  
ALTER FUNCTION [dbo].[GetTriffHead](@FromDate as datetime, @ToDate as DATETIME, @trnDocumentID as int, @trnDocumentLotDetailsID as INT, @TariffType as varchar(255))    
RETURNS INT    
AS     
BEGIN    
  Declare @TeriffHeadID int; 
  DECLARE @ReffNo  varchar(255);
  SET @TeriffHeadID = 0;    
  SET @ReffNo=(SELECT TOP 1 NTED.TeriffNo FROM   MstrGeneralTariffNOCWiseEffetiveDate NTED 
						INNER JOIN MstrGeneralTariffNOCWiseDetails NTD ON NTD.MstrGeneralTariffNOCWiseEffetiveDateID=NTED.MstrGeneralTariffNOCWiseEffetiveDateID  AND NTD.trnDocumentLotDetailsID=@trnDocumentLotDetailsID AND NTD.trnDocumentID=@trnDocumentID
						INNER JOIN MstrGeneralTariffNOCWise NT ON NT.MstrGeneralTariffNOCWiseEffetiveDateID=NTD.MstrGeneralTariffNOCWiseEffetiveDateID AND NT.Flagdeleted=0
						WHERE NTED.Flagdeleted=0)

  IF(@trnDocumentID > 0)    
  BEGIN    
      
    SET @TeriffHeadID = ISNULL((select TOP 1 G.MstrTariffHeadID from NOCTarrifData G      
    Inner JOIN (SELECT s.TariffType,TariffHeadName,MstrTariffHeadID from mstrtariffHead h    
       Inner join mstrtariffdescription S on h.MstrTariffHeadID = TariffHeadID    
       where TransactionType = 'WH' Group by s.TariffType,TariffHeadName,MstrTariffHeadID) as L on L.MstrTariffHeadID  = g.MstrTariffHeadID    
    where     
    ((CAST(G.EffetiveDateFrom as date) <= CAST(@ToDate as date)) AND (CAST(@FromDate as date) <= CAST(G.EffectiveToDate as date)) AND (CAST(G.EffetiveDateFrom as date) <= CAST(G.EffectiveToDate as date)) AND (CAST(@FromDate as date) <= CAST(@ToDate as date)))    
    and G.trnDocumentID = @trnDocumentID and G.TeriffNo = @ReffNo and TariffType = @TariffType),0)    
    
        
  END    
    
  if(ISNULL(@TeriffHeadID,0) = 0)    
  BEGIN    
    SET @TeriffHeadID = ISNULL((select G.MstrTariffHeadID from [dbo].[GenealTarrifData] G     
    Inner JOIN (SELECT s.TariffType,TariffHeadName,MstrTariffHeadID from mstrtariffHead h    
       Inner join mstrtariffdescription S on h.MstrTariffHeadID = TariffHeadID    
       where TransactionType = 'WH' Group by s.TariffType,TariffHeadName,MstrTariffHeadID) as L on L.MstrTariffHeadID  = g.MstrTariffHeadID    
    where     
    ((CAST(G.EffetiveDateFrom as date) <= CAST(@ToDate as date)) AND (CAST(@FromDate as date) <= CAST(G.EffectiveToDate as date)) AND (CAST(G.EffetiveDateFrom as date) <= CAST(G.EffectiveToDate as date)) AND (CAST(@FromDate as date) <= CAST(@ToDate as date)))    
    and G.StorageAreaReferenceNumber = @ReffNo and TariffType = @TariffType),0)    
  END    
         
    
  RETURN @TeriffHeadID    
END    