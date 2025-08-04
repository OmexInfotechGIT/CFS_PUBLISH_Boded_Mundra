USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnEmptyContainerOutWO]    Script Date: 01/08/2024 6:27:40 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-------------------------
CREATE TRIGGER  [dbo].[TGR_trnEmptyContainerOutWO]   
 ON  [dbo].[trnEmptyContainerOutWO]   
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   DECLARE @Deleted bit
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
		IF((select FlagDeleted FROM Inserted) = 1)
		BEGIN
			SET @Deleted = 1
		END
		ELSE
		BEGIN
			SET @Deleted = 0
		END
	END
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnEmptyContainerOutWOID] = i.[trnEmptyContainerOutWOID]	
		and p.[TransactionType] = i.[TransactionType]
		and p.[trnEmptyContainerOutWOPrefix] = i.[trnEmptyContainerOutWOPrefix]
		and p.[trnEmptyContainerOutWONo] = i.[trnEmptyContainerOutWONo]
		and p.[trnDocumentNo] = i.[trnDocumentNo] 
		and p.[trnDocumentID] = i.[trnDocumentID] 
		and p.[LocationTo] = i.[LocationTo] 
		and p.[LocationToID] = i.[LocationToID] 
		and p.[FRBundlingStatus] = i.[FRBundlingStatus] 
		and p.[Bundle20] = i.[Bundle20] 
		and p.[Bundle4045] = i.[Bundle4045] 
		and p.[LiftOnBy] = i.[LiftOnBy] 
		and p.[LiftOffBy] = i.[LiftOffBy] 
		and p.[TransportationBy] = i.[TransportationBy] 
		and p.[TransporterID] = i.[TransporterID]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and p.[TransporterName] = i.[TransporterName]
		and P.[Remarks] = i.[Remarks]
		and p.[IsEmptyGateOutprocess] = i.[IsEmptyGateOutprocess]
		and p.[ContainerStatus] = i.[ContainerStatus]
		and p.[Createdby] = i.[Createdby]
		and p.[CreatedDate] = i.[CreatedDate]
		and p.[UpdatedBy] = i.[UpdatedBy]
		and p.[UpdatedDate] = i.[UpdatedDate]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnEmptyContainerOutWO_History] ([trnEmptyContainerOutWOID],[TransactionType],[trnEmptyContainerOutWOPrefix]
		,[trnEmptyContainerOutWONo],[trnDocumentNo],[trnDocumentID],[LocationTo], [ContainerStatus]
           ,[LocationToID],[FRBundlingStatus],[Bundle20],[Bundle4045],[LiftOnBy],[LiftOffBy],[TransportationBy],[TransporterID],[TransporterName],[Remarks]
           ,[IsEmptyGateOutprocess],[YearID],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
			SELECT [trnEmptyContainerOutWOID],[TransactionType],[trnEmptyContainerOutWOPrefix],[trnEmptyContainerOutWONo],[trnDocumentNo],[trnDocumentID],[LocationTo],[ContainerStatus]
           ,[LocationToID],[FRBundlingStatus],[Bundle20],[Bundle4045],[LiftOnBy],[LiftOffBy],[TransportationBy],[TransporterID],[TransporterName],[Remarks]
           ,[IsEmptyGateOutprocess],[YearID],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
	END    


	if(@Deleted = 1)
	BEGIN
			SET NOCOUNT ON DECLARE @Id int
			DECLARE cur CURSOR STATIC FOR  
			 SELECT trnEmptyContainerOutWODetailsID from trnEmptyContainerOutWODetails WHERE trnEmptyContainerOutWOID = (SELECT TOP 1 trnEmptyContainerOutWOID FROM Inserted)
			OPEN cur
			IF @@CURSOR_ROWS > 0
			BEGIN  FETCH NEXT FROM cur INTO @Id WHILE @@Fetch_status = 0  BEGIN
			UPDATE trnEmptyContainerOutWODetails SET [UpdatedBy] = (select TOP 1 UpdatedBy from Inserted) ,[UpdatedDate] = [dbo].[GetCurrentDateTime]() , flagdeleted = 1  WHERE trnEmptyContainerOutWODetailsID = @Id
			FETCH NEXT FROM cur INTO @Id
			END END
			CLOSE cur DEALLOCATE cur SET NOCOUNT OFF 
	END



	


GO

ALTER TABLE [dbo].[trnEmptyContainerOutWO] ENABLE TRIGGER [TGR_trnEmptyContainerOutWO]
GO


