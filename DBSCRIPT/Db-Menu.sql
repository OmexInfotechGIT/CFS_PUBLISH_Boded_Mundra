IF NOT EXISTS(SELECT  * FROM  [Admin].[PageMenu] WHERE [Controller] = 'trnContainerDestuffWorkOrder' AND [Action] = 'index' )
BEGIN
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse]) 
	VALUES (142, 3, 'trnContainerDestuffWorkOrder', 'index', ' Container Destuff Work Order ', 'fa fa-circle-o', 4, 0, 1, 1, GETDATE(),1)
END
-------------
--Nisha=02-01-204
IF not Exists(SELECT  * FROM  [Admin].[PageMenu] where [Controller] = 'trnExBondDocumentEntry' and [Action] = 'index' and [ParentID] = 148)
Begin
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[warehouse])
	VALUES (148, 3, 'trnExBondDocumentEntry', 'index', 'EX-BOND DOCUMENT ENTRY', 'fa fa-circle-o', 0, 0, 1, 1, GETDATE(),1)
END
GO
-----------------------------
IF not Exists(SELECT  * FROM  [Admin].[PageMenu] where [Controller] = 'trnExBondDocumentEntry' and [Action] = 'index' and [ParentID] = 152)
Begin
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[warehouse])
	VALUES (152, 3, 'trnExBondDocumentEntry', 'index', 'EX-BOND DOCUMENT ENTRY', 'fa fa-circle-o', 0, 0, 1, 1, GETDATE(),1)
END
GO
-----------------------------
IF not Exists(SELECT  * FROM  [Admin].[PageMenu] where [Controller] = 'trnExBondDocumentEntry' and [Action] = 'index' and [ParentID] = 157)
Begin
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[warehouse])
	VALUES (157, 3, 'trnExBondDocumentEntry', 'index', 'EX-BOND DOCUMENT ENTRY', 'fa fa-circle-o', 0, 0, 1, 1, GETDATE(),1)
END
GO



--------------------------------------
--DHRUVI
--29/01/2024

DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'EXBOND' )
BEGIN
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'EXBOND', 'EX-BOND Report', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END
---------------
--NISHA
--31/01/2023

DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Tariff')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [Admin].[PageMenu] WHERE [Controller] = 'MstrGeneralTariffPartyWise' AND [Action] = 'Index' )
BEGIN
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'MstrGeneralTariffPartyWise', 'Action', 'Party Wise Tariff', 'fa fa-user', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END
GO

----------------------------------------------------------
--DHRUVI
--31/01/2024

DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Finance')
DECLARE @SortOrder int SET @SortOrder = (SELECT MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [Admin].[PageMenu] WHERE [Controller] = 'BondInvoice' AND [Action] = 'index' )
BEGIN
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
     VALUES (@ParentID, 2, 'BondInvoice', 'index', 'Bond Invoice', 'fa fa-file', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END
GO
---------------------------------------------
--DHRUVI
--02/04/2024
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Finance')
DECLARE @SortOrder int SET @SortOrder = (SELECT MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [Admin].[PageMenu] WHERE [Controller] = 'BondProformaInvoice' AND [Action] = 'index' )
BEGIN
	INSERT INTO [Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
     VALUES (@ParentID, 2, 'BondProformaInvoice', 'index', 'Bond Proforma Invoice', 'fa fa-file', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END
GO

-----------------------------------------------------------------------------
--DHRUVI
--11/06/2024

DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'BalanceCargoInventory' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'BalanceCargoInventory', 'Balance Cargo Inventory', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END

---------------------------------------
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'BondInvoiceRegister' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'BondInvoiceRegister', 'Bond Invoice Register', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END

---------------------------------------
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'InBondReport' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'InBondReport', 'In Bond Report', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END

-----------------------------------
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'ReExportReport' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'ReExportReport', 'Re-Export Report', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END

----------------------------------
--DHRUVI
--01/07/2024
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'EmptyContainerOutPendencyReport' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'EmptyContainerOutPendencyReport', 'Empty Container Out Pendency Report', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END
----------------------
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Reports')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'Reports' AND [Action] = 'WHCargoTruckDestuffingReport' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'Reports', 'WHCargoTruckDestuffingReport', 'WH Cargo Truck Destuffing Report', 'fa fa-user-secret', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END

--------------------------------
DECLARE @ParentID int  SET @ParentID = (SELECT  ISNULL(PageMenuID,0) FROM  [Admin].[PageMenu] WHERE MenuName = 'Masters')
DECLARE @SortOrder int SET @SortOrder = (select MAX(ISNULL(SortOrder,0)) + 10 FROM  [Admin].[PageMenu] WHERE flagdeleted = 0 AND isactive = 1 AND LevelID = 2 AND ParentID = @ParentID)
IF NOT EXISTS(SELECT  * FROM  [PREBONDED].[Admin].[PageMenu] WHERE [Controller] = 'PartyWiseTariffPriority' AND [Action] = 'index' )
BEGIN
	INSERT INTO [PREBONDED].[Admin].[PageMenu] ([ParentID], [LevelID], [Controller], [Action], [MenuName], [MenuLogoText], [SortOrder], [FlagDeleted], [IsActive], [Createdby], [CreatedDate],[Warehouse])
							VALUES (@ParentID, 2, 'PartyWiseTariffPriority', 'index', 'PartyWise Tariff Priority', 'fa fa-arrow-circle-right', @SortOrder, 0, 1, 1, [dbo].[getcurrentdatetime](),1)
END