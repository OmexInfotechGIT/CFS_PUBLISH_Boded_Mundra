USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportStufingWOContainerDetails_History]    Script Date: 1/16/2024 10:09:34 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportStufingWOGWContainerDetails_History')
BEGIN
 DROP TABLE trnExportStufingWOGWContainerDetails_History
END
GO

CREATE TABLE [dbo].[trnExportStufingWOContainerDetails_History](
	[trnExportStufingWOContainerDetails_Historyid] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOContainerDetailsID] [int] NULL,
	[trnExportStufingWOID] [int] NULL,
	[ContainerName] [varchar](max) NOT NULL,
	[trnEmptyContainerGateInDetailsID] [int] NOT NULL,
	[Size] [varchar](max) NULL,
	[Type] [varchar](max) NULL,
	[StuffingMode] [varchar](max) NULL,
	[NoOfPackageForContainer] [decimal](18, 0) NULL,
	[WeightForContainer] [decimal](18, 0) NULL,
	[NoOfPiecesForContainer] [decimal](18, 0) NULL,
	[CLPStatus] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


