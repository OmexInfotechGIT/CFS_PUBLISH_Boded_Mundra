USE [CFS_BONDED_WAREHOUSE]
GO
    
ALTER PROC [dbo].[SpGetTriffForInvoice]              
@BillDate DATEtime ,              
@TeriffHeadID int,              
@SubCommodityID int,              
@BillCommodityID int,              
@CargoTypeID int,              
@ContSizeID int,              
@YearID int,              
@BatchID int,              
@StateID int,              
@UOMID int,              
@DeliveryModeID int,              
@BillType varchar(255),              
@period int,      
@DestuffDate Date,      
@NOCDate VARCHAR(255) ,    
@Pattern VARCHAR(255)    
AS              
BEGIN              
               
 print @BillType              
               
                
  DECLARE @SQL  varchar(Max)               
  SET @SQL = ''              
  SET @SQL = '              
  DECLARE @InterBillDate DATE                
  DECLARE @InterTeriffHeadID int              
  DECLARE @InterSubCommodityID int              
  DECLARE @InterBillCommodityID int              
  DECLARE @InterCargoTypeID int              
  DECLARE @InterContSizeID int              
  DECLARE @InterYearID int              
  DECLARE @InterBatchID int              
  DECLARE @InterStateID int              
  DECLARE @InterUOMID int               
  DECLARE @InterDeliveryModeID int               
  DECLARE @Interperiod int         
  DECLARE @InterDestuffDate DATE       
  DECLARE @InterBillType  VARCHAR(255)        
  DECLARE @InterNOCDate DATE      
  DECLARE @InterPattern VARCHAR(255)    
              
     
  SET @InterBillDate   = '''+ CAST(@BillDate AS VARCHAR(255))+'''              
  SET @InterTeriffHeadID  = '+ CAST(@TeriffHeadID AS VARCHAR(255))+'              
  SET @InterSubCommodityID = '+ CAST(@SubCommodityID AS VARCHAR(255))+'              
  SET @InterBillCommodityID = '+ CAST(@BillCommodityID AS VARCHAR(255))+'              
  SET @InterCargoTypeID  = '+ CAST(@CargoTypeID AS VARCHAR(255))+'              
  SET @InterContSizeID  = '+ CAST(@ContSizeID AS VARCHAR(255))+'              
  SET @InterYearID   = '+ CAST(@YearID AS VARCHAR(255))+'              
  SET @InterBatchID   = '+ CAST(@BatchID AS VARCHAR(255))+'              
  SET @InterStateID   = '+ CAST(@StateID AS VARCHAR(255))+'              
  SET @InterUOMID    = '+ CAST(@UOMID AS VARCHAR(255))+'              
  SET @InterDeliveryModeID = '+ CAST(@DeliveryModeID AS VARCHAR(255))+'              
  SET @Interperiod   = '+ CAST(@period AS VARCHAR(255))+'              
  SET @InterBillType = '''+ CAST(@BillType AS VARCHAR(255))+'''      
  SET @InterPattern='''+CAST(@Pattern AS varchar(255))+'''   
  SET @InterNOCDate ='''+CAST(@NOCDate AS varchar(255))+'''      
  SET @InterDestuffDate   = '''+ CAST(@DestuffDate AS VARCHAR(255))+'''     
  IF @InterSubCommodityID = 0 SET @InterSubCommodityID = null               
  IF @InterBillCommodityID = 0 SET @InterBillCommodityID= null              
  IF @InterCargoTypeID = 0 SET @InterCargoTypeID= null              
  IF @InterContSizeID = 0 SET @InterContSizeID= null              
  IF @InterYearID = 0 SET @InterYearID= null              
  IF @InterBatchID = 0 SET @InterBatchID= null               
  IF @InterStateID = 0 SET @InterStateID = NULL              
  IF @InterUOMID = 0 SET @InterUOMID = NULL              
  IF @InterDeliveryModeID = 0 SET @InterDeliveryModeID = NULL              
  IF @Interperiod = 0 SET @Interperiod = NULL              
                 
              
                 
              
  SELECT DATEADD(DAY,fromDays-1, CASE WHEN @InterDestuffDate !='''' AND (@InterBillType=''Bond-GR'')                     
       THEN   @InterDestuffDate                        
       ELSE   @InterNOCDate                        
     END)  AS   FromDate,                      
   DATEADD(DAY,Todays-1, CASE WHEN @InterDestuffDate !='''' AND (@InterBillType=''Bond-GR'')                    
       THEN   @InterDestuffDate                       
       ELSE   @InterNOCDate                       
     END) AS   ToDate,       
  *, ISNULL((select ISNULL(SUM(ISNULL(Rate,0)),0) from MstrTariffHead T           
    INNER JOIN MstrTaxGroup TG On TG.HsnSacCode = T.HsnSacCode and TG.flagdeleted = 0          
    INNER JOIN MSTRStateTax ST on ST.TaxGrpID = TG.MstrTaxGroupID and ST.flagdeleted = 0          
    INNER JOIN MstrSubStateTaxRate SST on SST.MstrStateTaxID = ST.MSTRStateTaxID and SST.flagdeleted = 0           
    WHERE T.flagdeleted = 0 and T.MstrTariffHeadID = @InterTeriffHeadID  and SST.StateID = 12),0) as GSTPERForInvoice          
  from GenealTarrifData G              
  WHERE  G.MstrTariffHeadID = @InterTeriffHeadID              
  AND (CASE WHEN  G.ContSizeID = 0 THEN -1 ELSE G.ContSizeID END = CASE WHEN @InterContSizeID is null THEN -1 ELSE @InterContSizeID END          OR CASE WHEN  G.ContSizeID = 0 THEN -1 ELSE G.ContSizeID END = -1 )              
  AND (CASE WHEN G.MstrNatureOfCargoID = 0 THEN -1 ELSE G.MstrNatureOfCargoID END = CASE WHEN @InterCargoTypeID is null THEN -1 ELSE @InterCargoTypeID END     OR CASE WHEN G.MstrNatureOfCargoID = 0 THEN -1 ELSE G.MstrNatureOfCargoID END = -1 )            
  
  AND (CASE WHEN G.MstrBillableCommodityID = 0 THEN -1 ELSE  G.MstrBillableCommodityID END = CASE WHEN @InterBillCommodityID is null THEN -1 ELSE @InterBillCommodityID END  OR CASE WHEN G.MstrBillableCommodityID = 0 THEN -1 ELSE  G.MstrBillableCommodityID
  
    
      
        
          
            
 END = -1 )              
  AND (CASE WHEN G.MstrSubCommodityID = 0 THEN -1 ELSE G.MstrSubCommodityID END = CASE WHEN @InterSubCommodityID is null THEN -1 ELSE @InterSubCommodityID END     OR CASE WHEN G.MstrSubCommodityID = 0 THEN -1 ELSE G.MstrSubCommodityID END = -1 )          
  
    
  AND (CASE WHEN G.StoragePattern = ''0'' THEN ''0'' ELSE  G.StoragePattern END = CASE WHEN ISNULL(@InterPattern,NULL) is null THEN ''0'' ELSE @InterPattern END           OR CASE WHEN G.StoragePattern = ''0'' THEN ''0'' ELSE  G.StoragePattern END = ''0'' 
)              
  AND (CASE WHEN G.MstrUomID = 0 THEN -1 ELSE   G.MstrUomID END = CASE WHEN @InterUOMID is null THEN -1 ELSE @InterUOMID END             OR CASE WHEN G.MstrUomID = 0 THEN -1 ELSE   G.MstrUomID END = -1 )              
  AND (CASE WHEN G.DeliveryModeID = 0 THEN -1 ELSE   G.DeliveryModeID END = CASE WHEN @InterDeliveryModeID is null THEN -1 ELSE @InterDeliveryModeID END      OR CASE WHEN G.DeliveryModeID = 0 THEN -1 ELSE   G.DeliveryModeID END = -1 )              
              
        AND (              
    CASE WHEN @Interperiod is not null               
     THEN               
      CASE WHEN @Interperiod between G.fromdays and G.Todays               
       THEN -1 ELSE 0 END              
                    
    else               
     -1               
                   
    END = -1)              
                
  AND (CAST (G.EffetiveDateFrom AS DATE) <= CAST(@InterBillDate AS DATE) and CAST(@InterBillDate AS DATE) <= CAST(G.EffectiveToDate AS DATE)) '              
              
                
  IF @SubCommodityID = 0 SET @SubCommodityID = null               
  IF @BillCommodityID = 0 SET @BillCommodityID= null              
  IF @CargoTypeID = 0 SET @CargoTypeID= null              
  IF @ContSizeID = 0 SET @ContSizeID= null              
  IF @YearID = 0 SET @YearID= null              
  IF @BatchID = 0 SET @BatchID= null               
  IF @StateID = 0 SET @StateID = NULL              
  IF @UOMID = 0 SET @UOMID = NULL              
  IF @DeliveryModeID = 0 SET @DeliveryModeID = NULL              
              
                
  Declare @OrderBy varchar(max)              
  SET @OrderBy = ''              
  IF(@ContSizeID IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.ContSizeID DESC'              
              
  END              
  IF(@CargoTypeID IS NOT NULL)              
  BEGIN               
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.MstrNatureOfCargoID DESC'              
  END              
  IF(@BillCommodityID IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')       
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.MstrBillableCommodityID DESC'              
  END              
  IF(@SubCommodityID IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.MstrSubCommodityID DESC'              
  END              
  --IF(@BatchID IS NOT NULL)              
  --BEGIN              
  -- IF(@OrderBy !='')              
  --  SET @OrderBy += ', '              
  -- SET @OrderBy += ' G.MstrBatchID DESC'              
  --END              
  IF(@UOMID IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.MstrUomID DESC'              
  END              
              
  IF(@DeliveryModeID IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.DeliveryModeID DESC'              
  END              
              
  IF(@period IS NOT NULL)              
  BEGIN              
   IF(@OrderBy !='')              
    SET @OrderBy += ', '              
   SET @OrderBy += ' G.fromdays DESC , G.Todays desc'              
  END              
              
  IF(@OrderBy != '')              
   SET @SQL += ' ORDER BY ' + @OrderBy              
              
  print @SQL              
  Exec(@SQL)              
                
 END              
 --ELSE IF(@BillType = 'WeighmentInvoice')              
 --BEGIN              
 -- SELECT * from GenealTarrifData G  where MstrTariffHeadID = 37              
 -- WHERE G.MstrTariffHeadID =  @TeriffHeadID              
 -- and G.ContSizeID = ISNULL(@ContSizeID , G.ContSizeID)              
 -- and G.YearID = @YearID              
 -- and (CAST(G.EffetiveDateFrom AS DATE) <= CAST(@BillDate AS DATE) OR CAST(@BillDate AS DATE) >= CAST(G.EffectiveToDate AS DATE))              
                
 --END 