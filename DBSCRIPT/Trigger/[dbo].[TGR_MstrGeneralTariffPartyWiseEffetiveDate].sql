USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_MstrGeneralTariffPartyWiseEffetiveDate]    Script Date: 02/02/2024 12:36:55 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER  [dbo].[TGR_MstrGeneralTariffPartyWiseEffetiveDate]   
 ON  [dbo].[MstrGeneralTariffPartyWiseEffetiveDate]   
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
	IF EXISTS(SELECT * FROM Inserted)    
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
			BEGIN     
			IF NOT EXISTS (
				SELECT *             FROM Inserted p              
					JOIN Deleted AS i              ON 
						CAST(p.[EffetiveDateFrom] as date) = CAST(i.[EffetiveDateFrom] as date)	and 
						CAST(p.[EffectiveToDate] as date) = CAST(i.[EffectiveToDate] as date) and						
						p.[FlagDeleted] = i.[FlagDeleted] and
						p.[TeriffNo] = i.[TeriffNo] and
						p.[TeriffPrefix] = i.[TeriffPrefix] 
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[MstrGeneralTariffPartyWiseEffetiveDate_History]
										   ([MstrGeneralTariffPartyWiseEffetiveDateID]
										   ,[EffetiveDateFrom]
										   ,[EffectiveToDate]										  
										   ,[Flagdeleted]
										   ,[Createdby]
										   ,[CreatedDate]
										   ,[UpdatedBy]
										   ,[UpdatedDate]
										   ,[YearID]
										   ,[TeriffNo]
										   ,[TeriffPrefix]
										   ,[Caption])
						SELECT [MstrGeneralTariffPartyWiseEffetiveDateID]
							   ,[EffetiveDateFrom]
							   ,[EffectiveToDate]							  
							   ,[Flagdeleted]
							   ,[Createdby]
							   ,[CreatedDate]
							   ,[UpdatedBy]
							   ,[UpdatedDate]
							   ,[YearID]
							   ,[TeriffNo]
							   ,[TeriffPrefix]
							   ,@caption
								FROM Inserted 
					END    
			END



GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseEffetiveDate] ENABLE TRIGGER [TGR_MstrGeneralTariffPartyWiseEffetiveDate]
GO


