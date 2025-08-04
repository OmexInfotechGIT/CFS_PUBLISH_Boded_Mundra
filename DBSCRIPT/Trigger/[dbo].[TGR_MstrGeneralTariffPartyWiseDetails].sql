USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_MstrGeneralTariffPartyWiseDetails]    Script Date: 02/02/2024 12:40:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER  [dbo].[TGR_MstrGeneralTariffPartyWiseDetails]   
 ON  [dbo].[MstrGeneralTariffPartyWiseDetails]   
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
						p.[MstrGeneralTariffPartyWiseDetailsid] = i.[MstrGeneralTariffPartyWiseDetailsid] and
						p.[MstrGeneralTariffPartyWiseEffetiveDateID] = i.[MstrGeneralTariffPartyWiseEffetiveDateID] and
						p.[MstrCustomerID] = i.[MstrCustomerID] and
						p.[MstrCustomerName] = i.[MstrCustomerName] 

					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[MstrGeneralTariffPartyWiseDetails_History]
										   ([MstrGeneralTariffPartyWiseDetailsID]
										   ,[MstrGeneralTariffPartyWiseEffetiveDateID]
										   ,[MstrCustomerID]
										   ,[MstrCustomerName]
										   ,[Caption])
						SELECT [MstrGeneralTariffPartyWiseDetailsID]
							   ,[MstrGeneralTariffPartyWiseEffetiveDateID]
								,[MstrCustomerID]
								,[MstrCustomerName]
							   ,@caption
								FROM Inserted 
					END    
			END



GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWiseDetails] ENABLE TRIGGER [TGR_MstrGeneralTariffPartyWiseDetails]
GO


