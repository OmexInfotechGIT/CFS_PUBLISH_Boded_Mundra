USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExBondDocumentEntry]    Script Date: 01/05/2024 3:23:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER TRIGGER  [dbo].[TGR_trnExBondDocumentEntry]   
 ON  [dbo].[trnExBondDocumentEntry]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   DECLARE @IsFinished Varchar(50)
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'  
	END
	SET @IsFinished = (select IsFinished from inserted) 
	IF(@IsFinished = 0 )
	BEGIN
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnExBondDocumentEntryID] = i.[trnExBondDocumentEntryID]			
		and p.[trnExBondDocumentEntryPrefix] = i.[trnExBondDocumentEntryPrefix] 
		and p.[trnExBondDocumentEntryNo] = i.[trnExBondDocumentEntryNo] 
		and p.[InBOENo] = i.[InBOENo] 
		and p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID] 
		and p.[InBOEDate] = i.[InBOEDate] 
		and p.[IGMNO] = i.[IGMNO] 
		and p.[ItemNo] = i.[ItemNo] 
		and p.[CPStatus] = i.[CPStatus] 
		and p.[CPORBondNo] = i.[CPORBondNo] 
		and p.[CPORBondExpiryDate] = i.[CPORBondExpiryDate] 
		and p.[NOCValidDate] = i.[NOCValidDate] 
		and p.[Status] = i.[Status]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and P.[Createdby] = i.[Createdby]
		and P.[CreatedDate] = i.[CreatedDate]
		and P.[UpdatedBy] = i.[UpdatedBy]
		and P.[UpdatedDate] = i.[UpdatedDate]
		and P.[CargoType] = i.[CargoType]
		and P.[CargoTypeID] = i.[CargoTypeID]
		and P.[InBondConsoler] = i.[InBondConsoler]
		and P.[InBondConsolerID] = i.[InBondConsolerID]
		and P.[CargoDescription] = i.[CargoDescription]
		and P.[InBondBOEPackages] = i.[InBondBOEPackages]
		and P.[IsFinished] = i.[IsFinished]
		and P.[InBondBOEPieces] = i.[InBondBOEPieces]
		and P.[InBondBOEWeight] = i.[InBondBOEWeight]
		and P.[InBondCHA] = i.[InBondCHA]
		and P.[InBondCHAID] = i.[InBondCHAID]
		and P.[InBondForwarder] = i.[InBondForwarder]
		and P.[InBondForwarderID] = i.[InBondForwarderID]
		and P.[InBondImporter] = i.[InBondImporter]
		and P.[InBondImporterID] = i.[InBondImporterID]
		and P.[Remarks] = i.[Remarks]
		and P.[BULKSTATUS] = i.[BULKSTATUS]
		and P.[YearID] = i.[YearID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntry_History]
							([trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
							,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[CargoTypeID],[CargoDescription]
							,[InBondBOEPackages],[IsFinished],[InBondBOEWeight],[InBondCHA],InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS,[YearID])

					SELECT [trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
							,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[CargoTypeID],[CargoDescription],[InBondBOEPackages],[IsFinished],[InBondBOEWeight],[InBondCHA]
							,InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS,[YearID] FROM Inserted 
	END    
	END
	ELSE IF (EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnExBondDocumentEntryID] = i.[trnExBondDocumentEntryID]	
		WHERE (  p.[trnExBondDocumentEntryPrefix] <> i.[trnExBondDocumentEntryPrefix] 
		OR p.[trnExBondDocumentEntryNo] <> i.[trnExBondDocumentEntryNo] 
		OR p.[InBOENo] <> i.[InBOENo] 
		OR p.[trnDocumentLotDetailsID] <> i.[trnDocumentLotDetailsID] 
		OR p.[InBOEDate] <> i.[InBOEDate] 
		OR p.[IGMNO] <> i.[IGMNO] 
		OR p.[ItemNo] <> i.[ItemNo] 
		OR p.[CPStatus] <> i.[CPStatus] 
		OR p.[CPORBondNo] <> i.[CPORBondNo] 
		OR p.[CPORBondExpiryDate] <> i.[CPORBondExpiryDate] 
		OR p.[NOCValidDate] <> i.[NOCValidDate] 
		OR p.[Status] <> i.[Status]
		OR P.[CargoType] <> i.[CargoType]
		OR P.[CargoTypeID] <> i.[CargoTypeID]
		OR P.[InBondConsoler] <> i.[InBondConsoler]
		OR P.[InBondConsolerID] <> i.[InBondConsolerID]
		OR P.[CargoTypeID] <> i.[CargoTypeID]
		OR P.[CargoDescription] <> i.[CargoDescription]
		OR P.[InBondBOEPackages] <> i.[InBondBOEPackages]
		OR P.[InBondBOEPieces] <> i.[InBondBOEPieces]
		OR P.[InBondBOEWeight] <> i.[InBondBOEWeight]
		OR P.[InBondCHA] <> i.[InBondCHA])
		and P.[InBondCHAID] <> i.[InBondCHAID]
		and P.[InBondForwarder] <> i.[InBondForwarder]
		and P.[InBondForwarderID] <> i.[InBondForwarderID]
		and P.[InBondImporter] <> i.[InBondImporter]
		and P.[InBondImporterID] <> i.[InBondImporterID]
		and P.[Remarks] <> i.[Remarks]
		and P.[BULKSTATUS] <> i.[BULKSTATUS]
	) )
	BEGIN
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntry_History]
							([trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
							,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[CargoTypeID],[CargoDescription],[InBondBOEPackages],[IsFinished],[CargoType],[InBondBOEWeight],[InBondCHA]
							,InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS)

					SELECT [trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
							,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[CargoTypeID],[CargoDescription],[InBondBOEPackages],[IsFinished],[CargoType],[InBondBOEWeight],[InBondCHA]
							,InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS FROM Inserted 
	END
	ELSE
	BEGIN
		IF (NOT EXISTS (SELECT * FROM Inserted p  
			JOIN Deleted AS i ON 
			p.[trnExBondDocumentEntryID] = i.[trnExBondDocumentEntryID]				
			and p.[trnExBondDocumentEntryPrefix] = i.[trnExBondDocumentEntryPrefix] 
			and p.[trnExBondDocumentEntryNo] = i.[trnExBondDocumentEntryNo] 
			and p.[InBOENo] = i.[InBOENo] 
			and p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID] 
			and p.[InBOEDate] = i.[InBOEDate] 
			and p.[IGMNO] = i.[IGMNO] 
			and p.[ItemNo] = i.[ItemNo] 
			and p.[CPStatus] = i.[CPStatus] 
			and p.[CPORBondNo] = i.[CPORBondNo] 
			and p.[CPORBondExpiryDate] = i.[CPORBondExpiryDate] 
			and p.[NOCValidDate] = i.[NOCValidDate] 
			and p.[Status] = i.[Status]
			and P.[Flagdeleted] = i.[Flagdeleted]
			and P.[Createdby] = i.[Createdby]
			and P.[CreatedDate] = i.[CreatedDate]
			and P.[UpdatedBy] = i.[UpdatedBy]
			and P.[UpdatedDate] = i.[UpdatedDate]
			and P.[CargoType] = i.[CargoType]
			and P.[CargoTypeID] = i.[CargoTypeID]
			and P.[InBondConsoler] = i.[InBondConsoler]
			and P.[InBondConsolerID] = i.[InBondConsolerID]
			and P.[CargoTypeID] = i.[CargoTypeID]
			and P.[CargoDescription] = i.[CargoDescription]
			and P.[InBondBOEPackages] = i.[InBondBOEPackages]
			and P.[IsFinished] = i.[IsFinished]
			and P.[InBondBOEPieces] = i.[InBondBOEPieces]
			and p.[InBondBOEWeight] = i.[InBondBOEWeight]
			and p.[InBondCHA] = i.[InBondCHA]
			and P.[InBondCHAID] = i.[InBondCHAID]
			and P.[InBondForwarder] = i.[InBondForwarder]
			and P.[InBondForwarderID] = i.[InBondForwarderID]
			and P.[InBondImporter] = i.[InBondImporter]
			and P.[InBondImporterID] = i.[InBondImporterID]
			and P.[Remarks] = i.[Remarks]
			and P.[BULKSTATUS] = i.[BULKSTATUS]
			) and @Caption ='insert')   
		BEGIN       
			SET NOCOUNT ON;       
			INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntry_History]
								([trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
								,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
								,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[CargoTypeID],[CargoDescription],[InBondBOEPackages]
								,[IsFinished],[InBondBOEWeight],[InBondCHA],InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS)

						SELECT [trnExBondDocumentEntryID],[trnExBondDocumentEntryPrefix],[trnExBondDocumentEntryNo],[InBOENo],[trnDocumentLotDetailsID],[InBOEDate]
								,[IGMNO],[ItemNo],[CPStatus],[CPORBondNo],[CPORBondExpiryDate],[NOCValidDate],[Status]
								,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[CargoTypeID],[CargoDescription],[InBondBOEPackages]
								,[IsFinished],[InBondBOEWeight],[InBondCHA],InBondCHAID,InBondForwarder,InBondForwarderID,InBondImporter,InBondImporterID,Remarks,BULKSTATUS FROM Inserted 
		END 
		ELSE
			BEGIN
				IF NOT EXISTS (SELECT * FROM Inserted p
					JOIN Deleted AS i ON
					p.[trnExBondDocumentEntryID] = i.[trnExBondDocumentEntryID]
					and p.[trnExBondDocumentEntryPrefix] = i.[trnExBondDocumentEntryPrefix]
					and p.[trnExBondDocumentEntryNo] = i.[trnExBondDocumentEntryNo]
					and p.[IsFinished]=i.[IsFinished]
					and p.[Flagdeleted] =i.[Flagdeleted]
				)
				BEGIN
					SET NOCOUNT ON;  
					UPDATE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntry_History] 
					SET   [trnExBondDocumentEntryPrefix] = inserted.[trnExBondDocumentEntryPrefix],
						  [trnExBondDocumentEntryNo] = inserted.[trnExBondDocumentEntryNo],
						  [IsFinished]=inserted.[IsFinished],
						  [Flagdeleted] =inserted.[Flagdeleted]
					FROM [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntry_History]  
					INNER JOIN  inserted ON [trnExBondDocumentEntry_History].[trnExBondDocumentEntryID] = inserted.[trnExBondDocumentEntryID]
				END
		END	
	END

GO

ALTER TABLE [dbo].[trnExBondDocumentEntry] ENABLE TRIGGER [TGR_trnExBondDocumentEntry]
GO


