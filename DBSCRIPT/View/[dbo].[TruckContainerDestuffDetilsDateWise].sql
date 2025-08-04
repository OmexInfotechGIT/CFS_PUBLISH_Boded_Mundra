USE [PREBONDED]
GO

ALTER View [dbo].[TruckContainerDestuffDetilsDateWise]      
AS      
SELECT CD.trnContainerDestuffingID AS trnDestuffingID, 'C' AS Type,      
  CAST(EndDestuffDate AS Date) AS EndDestuffDate,       
  trnDocumentLotDetailsID,       
  NoOfPackages, Weight, NoOfPieces,      
  WHLocation, AreaRequired,WHLocationID,      
  trnDocumentBoiItemsID,       
  PackingTypeID AS PackagingTypeID ,      
  PackingType AS PackagingType ,      
  ModelBillCommodityID AS BillCommodityID,       
  ModelBillCommodity AS BillCommodity,alias AS BillCommodityalias,       
  EquipmentID AS EquipmentUsedID ,EquipmentName AS EquipmentUsed,      
  ContainerNo AS TruckContNo      
  ,0 AS trnDocumentContainerID
FROM trnContainerDestuffingItems CDI      
INNER JOIN trnContainerDestuffing CD on CD.trnContainerDestuffingID = CDI.trnContainerDestuffingID AND CD.flagdeleted = 0      
INNER JOIN MstrBillableCommodity mstrcomm on mstrcomm.MstrBillableCommodityID = CDI.ModelBillCommodityID      
WHERE CDI.flagdeleted = 0 AND CD.isfinished = 1      
UNION      
SELECT TD.trnTruckDestuffingID AS trnDestuffingID, 'T' AS Type,      
  CAST(EndDestuffDate AS Date) AS EndDestuffDate,        
  trnDocumentLotDetailsID,       
  Packages, Weight, Pieces ,      
  WHLocation, AreaRequired,WHLocationID,      
  trnDocumentBoiItemsID,      
  PackagingTypeID,       
  PackagingType,      
  BillCommodityID,      
  BillCommodity AS BillCommodity,      
  alias AS BillCommodityalias,       
  EquipmentUsedID,EquipmentUsed,      
  TruckNo AS TruckContNo
  ,0 AS trnDocumentContainerID
FROM trnTruckDestuffingDetails TDD      
INNER JOIN MstrBillableCommodity mstrcomm on mstrcomm.MstrBillableCommodityID = TDD.BillCommodityID      
INNER JOIN trnTruckDestuffing TD on TD.trnTruckDestuffingID = TDD.trnTruckDestuffingID AND TD.flagdeleted = 0  AND TD.isfinished = 1     
WHERE TDD.flagdeleted =  0  AND ISNULL(TDD.trnDocumentContainerID,0)=0
UNION
SELECT TD.trnTruckDestuffingID AS trnDestuffingID, 'T' AS Type,
	  CAST(TD.EndDestuffDate AS Date) AS EndDestuffDate,
	  TDD.trnDocumentLotDetailsID,
	  TDD.Packages, TDD.Weight, TDD.Pieces,
	  TDD.WHLocation, TDD.AreaRequired,WHLocationID,
	  TDD.trnDocumentBoiItemsID,
	  TDD.PackagingTypeID,
	  TDD.PackagingType,
	  TDD.BillCommodityID,
	  TDD.BillCommodity AS BillCommodity,
	  alias AS BillCommodityalias,
	  TDD.EquipmentUsedID,EquipmentUsed,
	 (SELECT DC.ContainerNumber FROM trnDocumentContainer DC   
			WHERE DC.Flagdeleted=0 AND DC.trnDocumentContainerID=TDD.trnDocumentContainerID) AS TruckContNo
	,TDD.trnDocumentContainerID
FROM trnTruckDestuffingDetails TDD      
INNER JOIN MstrBillableCommodity  mstrcomm ON mstrcomm.MstrBillableCommodityID = TDD.BillCommodityID AND mstrcomm.FlagDeleted=0
INNER JOIN trnTruckDestuffing TD ON TD.trnTruckDestuffingID = TDD.trnTruckDestuffingID AND TD.flagdeleted = 0  AND TD.isfinished = 1
WHERE TDD.flagdeleted =  0 AND ISNULL(TDD.trnDocumentContainerID,0)>0