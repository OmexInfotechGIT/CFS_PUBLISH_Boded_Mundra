USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnLoadedContainerOutGP_History]    Script Date: 1/26/2024 12:02:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnLoadedContainerOutGPGW_History')
BEGIN
 DROP TABLE trnLoadedContainerOutGPGW_History
END
GO



CREATE TABLE [dbo].[trnLoadedContainerOutGP_History](
	[trnLoadedContainerOutGP_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnLoadedContainerOutGPID] [bigint] NOT NULL,
	[trnLoadedContainerOutGPPrefix] [varchar](50) NULL,
	[trnLoadedContainerOutGPNo] [varchar](50) NULL,
	[TruckNo] [varchar](255) NOT NULL,
	[trnEmptyTruckGateInID] [int] NULL,
	[Remarks] [varchar](255) NOT NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO


