USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnLoadedContainerOutWO]    Script Date: 01/10/2024 3:15:12 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-------------------------
ALTER TRIGGER  [dbo].[TGR_trnLoadedContainerOutWO]   
 ON  [dbo].[trnLoadedContainerOutWO]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    

		
		
	END
	
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnLoadedContainerOutWOID] = i.[trnLoadedContainerOutWOID]	
		and p.[TransactionType] = i.[TransactionType]
		and p.[WeighmentRequired] = i.[WeighmentRequired] 
		and p.[NonWeighmentReason] = i.[NonWeighmentReason] 
		and p.[WeighmentPaymentMode] = i.[WeighmentPaymentMode] 
		and p.[ManualSSRNo] = i.[ManualSSRNo] 
		and p.[TransportatiOnType] = i.[TransportatiOnType] 
		and p.[VehicleType] = i.[VehicleType] 
		and p.[TruckNo] = i.[TruckNo] 
		and p.[TruckID] = i.[TruckID]
		and p.[Transporter] = i.[Transporter] 
		and p.[TransporterID] = i.[TransporterID] 
		and P.[Remarks] = i.[Remarks]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and p.IsFinished = i.IsFinished
		and p.[YearID] = i.[YearID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnLoadedContainerOutWO_History]
							([trnLoadedContainerOutWOID],[TransactionType],
							[WeighmentRequired],[NonWeighmentReason],[WeighmentPaymentMode],[ManualSSRNo],[TransportatiOnType],[VehicleType],
							[TruckNo],[TruckID],[Transporter],[TransporterID],[Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],
							[UpdatedDate],[caption], IsFinished, [YearID])

					SELECT [trnLoadedContainerOutWOID],[TransactionType],
							[WeighmentRequired],[NonWeighmentReason],[WeighmentPaymentMode],[ManualSSRNo],[TransportatiOnType],[VehicleType],
							[TruckNo],[TruckID],[Transporter],[TransporterID],[Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],
							[UpdatedDate],@Caption, IsFinished, [YearID] FROM Inserted 
	END    
		 	
			
	IF(((select [WeighmentPaymentMode] from Deleted) = 'SSR' and (select [WeighmentPaymentMode] from Inserted) <> 'SSR' and (select IsFinished from Inserted) = 1) OR (select flagdeleted from Inserted) = 1)
	BEGIN
			
			SET NOCOUNT ON DECLARE @Id int
			DECLARE cur CURSOR STATIC FOR 
			 select trnLoadedContainerOutWODetailsID from trnLoadedContainerOutWODetails WL where WL.trnLoadedContainerOutWOID = (select trnLoadedContainerOutWOID from Inserted)
			OPEN cur
			IF @@CURSOR_ROWS > 0
			BEGIN  FETCH NEXT FROM cur INTO @Id WHILE @@Fetch_status = 0  BEGIN
			
				IF EXISTS(select * from SSRInvoice where Infoid = @Id and InfoTableName = 'trnLoadedContainerOutWODetails' and flagdeleted = 0)
				BEGIN
						Update SSRInvoice SET Flagdeleted = 1 where Infoid = @Id and InfoTableName = 'trnLoadedContainerOutWODetails'
				END

			FETCH NEXT FROM cur INTO @Id
			END END
			CLOSE cur DEALLOCATE cur SET NOCOUNT OFF
	END


GO

ALTER TABLE [dbo].[trnLoadedContainerOutWO] ENABLE TRIGGER [TGR_trnLoadedContainerOutWO]
GO


